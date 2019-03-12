import React from 'react';

import TitleBar from '../TitleBar';
import VideoList from './VideoList';
import SortButtons from './SortButtons';
import PageControls from './PageControls';

export default class App extends React.Component {
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

    // routing
    const { searchTerm } = this.props.match.params;
    if (searchTerm) {
      this.setState({ searchTerm });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { sortBy, reverse, page, autoScroll, searchTerm } = this.state;
    const { query, title } = this.props;
    return (
      <div className="d-flex flex-column justify-content-center">

        <TitleBar title={title}>

          <div>
            <input
              className="form-control"
              type="text"
              value={searchTerm}
              onChange={this.searchChange}
              placeholder="Search..."
            />  
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
  searchChange = e => {
    
    const searchTerm = e.target.value;
    this.setState({ searchTerm });

    // routing
    const { pathname } = this.props.history.location;
    const sliceIdx = pathname.lastIndexOf('/');
    const rootPath = pathname.slice(0, sliceIdx)
    const searchPath = `/@${searchTerm}`;
    this.props.history.push(rootPath + searchPath)
  }
  handleScroll = event => {
    const { autoScroll } = this.state;
    const e = event.target.scrollingElement;
    const atBottom = e.scrollHeight - e.scrollTop === e.clientHeight;
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
