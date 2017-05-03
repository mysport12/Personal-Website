'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bootstrapCss = require('bootstrap-css');

var _bootstrapCss2 = _interopRequireDefault(_bootstrapCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Projects page

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project() {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {
            var pcjband = {
                name: "Pace Car Joe",
                url: "www.pcjband.com",
                img: "/img/pacecarjoe.jpg",
                description: "My friend reached out looking for help with his band's website. I set him up with a Wordpress site that he is able to manage and maintain on his own. The project provided me with my first look at Wordpress and the user friendly admin dashboard."
            };

            var dailyem = {
                name: "Daily Em",
                url: "www.dailyem.com",
                img: "/img/dailyem.jpg",
                description: "DailyEm.com is my wife's blog created to provide readers with fitness ideas/motivation, new and exciting recipes, and funny stories about our two dogs."
            };

            return _react2.default.createElement(
                'div',
                { styleName: 'card' },
                _react2.default.createElement(
                    'div',
                    { styleName: 'card-block' },
                    _react2.default.createElement(
                        'h3',
                        { styleName: 'card-title' },
                        dailyem.name
                    ),
                    _react2.default.createElement(
                        'p',
                        { styleName: 'card-text' },
                        dailyem.url
                    ),
                    _react2.default.createElement('img', { src: dailyem.img, styleName: 'card-img-left' }),
                    _react2.default.createElement(
                        'p',
                        null,
                        dailyem.description
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { styleName: 'row' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        pcjband.name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        pcjband.url
                    ),
                    _react2.default.createElement('img', { src: pcjband.img }),
                    _react2.default.createElement(
                        'p',
                        null,
                        pcjband.description
                    )
                )
            );
        }
    }]);

    return Project;
}(_react2.default.Component);

module.exports = Project();