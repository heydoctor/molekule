import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Label from './Label';
import FormError from './FormError';
import Flex from '../Flex';
import Box from '../Box';

export default class RadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
        disabled: PropTypes.bool,
      })
    ),
    variant: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    choices: [],
    onChange() {},
    variant: 'primary',
    size: 'md',
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: props.value || null,
    };
  }

  handleChange = field => {
    // Bail out if value is the same
    if (this.state.selected === field) {
      return;
    }

    this.setState({
      selected: field,
    });

    this.props.onChange(this.props.name, field);
  };

  render() {
    const { choices, error, horizontal, label, variant, size } = this.props;

    return (
      <Box>
        {label && <Label>{label}</Label>}

        <Flex flexDirection={horizontal ? 'row' : 'column'}>
          {choices.length &&
            choices.map(choice => {
              const { value = choice.id } = choice;

              return (
                <Box mr={1} key={choice.id}>
                  <Checkbox
                    size={size}
                    variant={variant}
                    id={`RadioButton${value}`}
                    key={`RadioButton${value}`}
                    name={choice.name}
                    label={choice.label}
                    value={this.state.selected === choice.name}
                    onChange={this.handleChange}
                    iconOn="radiobox-marked"
                    iconOff="radiobox-blank"
                  />
                </Box>
              );
            })}
        </Flex>

        {!!error && <FormError>{error}</FormError>}
      </Box>
    );
  }
}
