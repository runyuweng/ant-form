'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]); } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false, descriptor.configurable = true, "value" in descriptor && (descriptor.writable = true), Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor; }; }();

require('antd/lib/form/style/css');

require('antd/lib/button/style/css');

require('antd/lib/input/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function"); }

function _possibleConstructorReturn(self, call) { if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass); }

var FormItem = _form2.default.Item;
// 经过 Form.create 包装的组件将会自带 this.props.form 属性

var AntForm = function (_Component) {
  function AntForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AntForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AntForm.__proto__ || Object.getPrototypeOf(AntForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault(), _this.props.form.validateFields(function (error, fieldsValue) {
        _this.props.onSubmit(error, fieldsValue);
      });
    }, _this.createFormItem = function (item) {
      return item.disabled ? null : _react2.default.createElement(
        FormItem,
        _extends({
          key: item.name
        }, item.props),
        _this.props.form.getFieldDecorator(item.name, item.opts)(item.component || _react2.default.createElement(_input2.default, null))
      );
    }, _this.createButton = function (item) {
      return _react2.default.createElement(
        _button2.default,
        _extends({ key: item.key }, item.props),
        item.text
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 提交表单


  return _inherits(AntForm, _Component), _createClass(AntForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formConfig = this.props.formConfig;

      return _react2.default.createElement(
        _form2.default,
        _extends({
          onSubmit: this.handleSubmit
        }, formConfig.formProps),
        formConfig.items.map(function (d) {
          return _this2.createFormItem(d);
        }),
        formConfig.buttons ? _react2.default.createElement(
          FormItem,
          formConfig.buttons.props,
          formConfig.buttons.items.map(function (btn) {
            return _this2.createButton(btn);
          })
        ) : _react2.default.createElement(
          FormItem,
          { wrapperCol: { span: 4, offset: 4 } },
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', htmlType: 'submit', size: 'default' },
            '\u63D0\u4EA4'
          )
        )
      );
    }
  }]), AntForm;
}(_react.Component);

exports.default = _form2.default.create({
  onFieldsChange: function onFieldsChange(props, fields) {
    props.onFieldsChange && props.onFieldsChange(fields);
  }
})(AntForm);