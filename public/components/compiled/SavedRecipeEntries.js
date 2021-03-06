'use strict';

var SavedRecipeEntries = function SavedRecipeEntries(props) {
  return React.createElement(
    'div',
    { className: 'flex-container' },
    props.list.map(function (entry) {
      return React.createElement(SavedRecipeEntry, { entry: entry, handleButtonClick: props.handleButtonClick });
    })
  );
};

SavedRecipeEntries.propTypes = {
  list: React.PropTypes.array.isRequired
};

window.SavedRecipeEntries = SavedRecipeEntries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NhdmVkUmVjaXBlRW50cmllcy5qc3giXSwibmFtZXMiOlsiU2F2ZWRSZWNpcGVFbnRyaWVzIiwicHJvcHMiLCJsaXN0IiwibWFwIiwiZW50cnkiLCJoYW5kbGVCdXR0b25DbGljayIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQ7QUFBQSxTQUN2QjtBQUFBO0FBQUEsTUFBSyxXQUFVLGdCQUFmO0FBQ0dBLFVBQU1DLElBQU4sQ0FBV0MsR0FBWCxDQUFlO0FBQUEsYUFDZCxvQkFBQyxnQkFBRCxJQUFrQixPQUFPQyxLQUF6QixFQUFnQyxtQkFBbUJILE1BQU1JLGlCQUF6RCxHQURjO0FBQUEsS0FBZjtBQURILEdBRHVCO0FBQUEsQ0FBekI7O0FBUUFMLG1CQUFtQk0sU0FBbkIsR0FBK0I7QUFDN0JKLFFBQU1LLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURDLENBQS9COztBQUlBQyxPQUFPWCxrQkFBUCxHQUE0QkEsa0JBQTVCIiwiZmlsZSI6IlNhdmVkUmVjaXBlRW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTYXZlZFJlY2lwZUVudHJpZXMgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtY29udGFpbmVyJz5cbiAgICB7cHJvcHMubGlzdC5tYXAoZW50cnkgPT5cbiAgICAgIDxTYXZlZFJlY2lwZUVudHJ5IGVudHJ5PXtlbnRyeX0gaGFuZGxlQnV0dG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUJ1dHRvbkNsaWNrfS8+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5TYXZlZFJlY2lwZUVudHJpZXMucHJvcFR5cGVzID0ge1xuICBsaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG53aW5kb3cuU2F2ZWRSZWNpcGVFbnRyaWVzID0gU2F2ZWRSZWNpcGVFbnRyaWVzO1xuIl19