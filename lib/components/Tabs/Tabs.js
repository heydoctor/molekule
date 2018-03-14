import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabsProvider = styled.div`
  display: flex;
  flex-direction: ${p => (p.vertical ? 'row' : 'column')};
`;

const TabList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: ${p => (p.vertical ? 'column' : 'row')};
  border-${p => (p.vertical ? 'right' : 'bottom')}: 1px solid #dfe3e8;
`;

const TabListItem = styled.li`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Tab = styled.button`
  appearance: none;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  font-size: 14px;
  position: relative;
  justify-content: center;
  margin-${p => (p.vertical ? 'left' : 'top')}: 1px;
  margin-${p => (p.vertical ? 'right' : 'bottom')}: -1px;
  padding: ${p => (p.vertical ? '0' : '0 12px')};
  outline: none;
  white-space: nowrap;
  cursor: pointer;
`;

const TabTitle = styled.span`
  color: ${p => (p.active ? '#212b36' : '#637381')};
  display: block;
  padding: ${p => (p.vertical ? '8px 12px' : '12px 8px')};
  border-${p => (p.vertical ? 'right' : 'bottom')}: 4px solid ${p =>
  (p.active ? p.theme.colors.primary : 'transparent')};

  &::hover {
    color: #212b36;
    border-color: ${p => (p.active ? p.theme.colors.primary : '#d9dee3')};
  }
`;

const TabContent = styled.div`
  padding: 12px;
`;

class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    active: PropTypes.number,
    vertical: PropTypes.bool,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    active: undefined,
    vertical: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: props.active || 0,
    };
  }

  componentDidUpdate() {
    if (this.props.active && this.props.active !== this.state.active) {
      this.setState({
        active: this.props.active,
      });
    }
  }

  get controlled() {
    return 'active' in this.props && 'onSelect' in this.props;
  }

  handleSelect = selected => {
    if (this.controlled) {
      this.props.onSelect(selected);
    } else {
      this.setState({
        active: selected,
      });
    }
  };

  renderHeadings() {
    return this.props.tabs.map((tab, i) => (
      <TabListItem key={tab.id || i}>
        <Tab vertical={this.props.vertical} onClick={() => this.handleSelect(i)}>
          <TabTitle active={this.state.active === i} vertical={this.props.vertical}>
            {tab.title}
          </TabTitle>
        </Tab>
      </TabListItem>
    ));
  }

  renderContent() {
    const { content } = this.props.tabs[this.state.active];
    if (React.isValidElement(content)) {
      return content;
    }
    throw new Error('Tab content must be a valid React element.');
  }

  render() {
    return (
      <TabsProvider vertical={this.props.vertical}>
        <TabList vertical={this.props.vertical}>{this.renderHeadings()}</TabList>
        <TabContent>{this.renderContent()}</TabContent>
      </TabsProvider>
    );
  }
}

export default Tabs;
