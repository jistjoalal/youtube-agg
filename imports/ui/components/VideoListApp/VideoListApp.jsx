import React from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from '../TitleBar';
import VideoList from './VideoList';
import SortButtons from './SortButtons';
import PageControls from './PageControls';

export default class VideoListApp extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'postedTime',
      autoScroll: false,
      reverse: false,
      page: 1,
      searchTerm: '',
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.setSearchTermFromRoute();
  }
  componentDidUpdate() {
    this.setSearchTermFromRoute();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { sortBy, reverse, page, autoScroll, searchTerm } = this.state;
    const { query, title } = this.props;
    return (
      <div>

        <Helmet>
          <title>{title}</title>
        </Helmet>

        <TitleBar title={title}>

          <div className="m-1">
            <form onSubmit={this.submitSearch}>
              <input
                className="form-control"
                type="text"
                name="searchTerm"
                value={searchTerm}
                onChange={this.searchChange}
                placeholder="Search..."
              />  
            </form> 
          </div>

          <SortButtons
            sortBy={sortBy}
            reverse={reverse}
            change={this.changeSort}
          />
            
        </TitleBar>

        <VideoList
          query={query}
          sortBy={sortBy}
          reverse={reverse}
          page={page}
          searchTerm={searchTerm}
        />

        <PageControls
          autoScroll={autoScroll}
          nextPage={this.nextPage}
          toggleAutoScroll={this.toggleAutoScroll}
        />

      </div>
    )
  }
  /**
   * Routing
   */
  setRouteFromSearchTerm = searchTerm => {
    const { pathname } = this.props.history.location;
    const sliceIdx = pathname.lastIndexOf('/');
    const rootPath = pathname.slice(0, sliceIdx)
    const searchPath = `/@${searchTerm}`;
    this.props.history.push(rootPath + searchPath)
  }
  setSearchTermFromRoute = _ => {
    const searchTerm = this.props.match.params.searchTerm || '';
    if (searchTerm !== this.state.searchTerm) {
      this.setState({ searchTerm });
    }
  }
  /**
   * Events
   */
  searchChange = e => {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm,
      page: 1,
    });
    this.setRouteFromSearchTerm(searchTerm);
  }
  submitSearch = e => {
    e.preventDefault();
    e.target.searchTerm.blur();
  }
  handleScroll = e => {
    const { autoScroll } = this.state;
    const { scrollHeight, scrollTop, clientHeight }
      = e.target.scrollingElement;
    const dif = scrollHeight - scrollTop;

    // Pad end of page w/ 100 px for better UX
    // and to account for weird viewports
    // (some old phones have their own "padding"
    // that messes w/ calculation)
    const PAD = 100;
    const atBottom = dif - clientHeight <= PAD;
    if (atBottom && autoScroll) {
      this.nextPage();
    }
  }
  toggleAutoScroll = _ => {
    this.setState(state => ({
      autoScroll: !state.autoScroll,
      page: state.page + +!state.autoScroll,
    }));
  }
  nextPage = _ => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  }
  changeSort = sortBy => _ => {
    this.setState(state => ({
      sortBy,
      reverse: state.sortBy == sortBy && !state.reverse,
      page: 1,
    }));
  }
}
