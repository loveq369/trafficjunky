'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Campaign = function (_Base) {
  _inherits(Campaign, _Base);

  function Campaign() {
    _classCallCheck(this, Campaign);

    return _possibleConstructorReturn(this, (Campaign.__proto__ || Object.getPrototypeOf(Campaign)).apply(this, arguments));
  }

  _createClass(Campaign, [{
    key: 'getAll',
    value: function getAll(options) {
      return this.request({
        path: '/api/campaigns.json',
        query: options
      });
    }
  }, {
    key: 'getById',
    value: function getById(id) {
      return this.request({
        path: '/api/campaigns/' + id + '.json'
      });
    }
  }, {
    key: 'getStatsById',
    value: function getStatsById(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.campaignId = id;
      return this.request({
        path: '/api/campaigns/stats.json',
        query: options
      });
    }
  }, {
    key: 'getBidsStats',
    value: function getBidsStats(options) {
      return this.request({
        path: '/api/campaigns/bids/stats.json',
        query: options
      });
    }
  }, {
    key: 'getTimeTargetsById',
    value: function getTimeTargetsById(id) {
      return this.request({
        path: '/api/campaigns/' + id + '/timetargets.json'
      });
    }
  }]);

  return Campaign;
}(_base2.default);

exports.default = Campaign;