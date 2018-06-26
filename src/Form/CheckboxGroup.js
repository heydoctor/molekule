import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import FormError from './FormError';
import Box from '../Box';
import Flex from '../Flex';

export default class CheckboxGroup extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    horizontal: PropTypes.bool,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
        disabled: PropTypes.bool,
      })
    ),
  };

  static defaultProps = {
    choices: [],
    onChange() {},
    horizontal: false,
  };

  state = {
    selected: Array.isArray(this.props.value) ? [...this.props.value] : [],
  };

  render() {
    const { choices, error, horizontal } = this.props;

    return (
      <Box>
        <Flex flexDirection={horizontal ? 'row' : 'column'}>
          {choices.length &&
            choices.map(choice => {
              const { value = choice.id } = choice;

              return (
                <Checkbox
                  key={`Checkbox${value}`}
                  id={`Checkbox${value}`}
                  name={`Checkbox${value}`}
                  value={this.state.selected && this.state.selected.includes(value)}
                  label={choice.label}
                  onChange={this.createChangeHandler(choice)}
                  horizontal={horizontal}
                />
              );
            })}
        </Flex>
        {!!error && <FormError>{error}</FormError>}
      </Box>
    );
  }

  createChangeHandler = choice => (name, value) => {
    const { selected } = this.state;
    let newSelected;
    if (!selected.includes(value)) {
      if (choice.exclusive) {
        newSelected = [value];
      } else {
        newSelected = this.props.choices
          .filter(c => !c.exclusive && (c.value === value || selected.includes(c.value)))
          .map(c => c.value);
      }
    } else {
      const index = selected.indexOf(value);
      newSelected = [...selected.slice(0, index), ...selected.slice(index + 1)];
    }

    this.setState({
      selected: newSelected,
    });

    this.props.onChange(this.props.name, newSelected);
  };
}
