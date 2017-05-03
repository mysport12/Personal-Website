'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bootstrapCss = require('bootstrap-css');

var _bootstrapCss2 = _interopRequireDefault(_bootstrapCss);

var _about = require('about.js');

var _about2 = _interopRequireDefault(_about);

var _projects = require('projects.js');

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Home from 'home.js'


//import Contact from 'contact.js'

var DeterminePage = function (_React$Component) {
	_inherits(DeterminePage, _React$Component);

	function DeterminePage() {
		_classCallCheck(this, DeterminePage);

		return _possibleConstructorReturn(this, (DeterminePage.__proto__ || Object.getPrototypeOf(DeterminePage)).apply(this, arguments));
	}

	_createClass(DeterminePage, [{
		key: 'render',
		value: function render() {
			if (this.props.page == 'homePage') {
				return _react2.default.createElement(Home, null);
			} else if (this.props.page == 'aboutPage') {
				return _react2.default.createElement(_about2.default, null);
			} else if (this.props.page == 'projectPage') {
				return _react2.default.createElement(_projects2.default, null);
			} else if (this.props.page == 'contactPage') {
				return _react2.default.createElement(Contact, null);
			} else {
				console.log("An unknown page was selected");
			}
		}
	}]);

	return DeterminePage;
}(_react2.default.Component);

ReactDOM.render(DeterminePage(), document.getElementById('content'));