import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Component } from "react";
import { MapContext } from "react-mapbox-gl/lib-esm/context";

var MappedComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MappedComponent, _Component);

  function MappedComponent() {
    _classCallCheck(this, MappedComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MappedComponent).apply(this, arguments));
  }

  _createClass(MappedComponent, [{
    key: "getMapInstance",
    value: function getMapInstance() {
      return this.context;
    }
  }]);

  return MappedComponent;
}(Component);

MappedComponent.contextType = MapContext;
export default MappedComponent;
