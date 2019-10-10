import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Button = ({ type, color, disabled, children, onClick }) => {
	return (
		<button
			type={type}
			className={`btn btn__${color}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'link',
	]),
	disabled: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
		.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	type: 'submit',
	color: 'primary',
	disabled: false,
};
