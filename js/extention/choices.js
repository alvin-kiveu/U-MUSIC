/*!choices.js v3.0.4 | (c) 2018 Josh Johnson | https://github.com/jshjohnson/Choices#readme*/ (function webpackUniversalModuleDefinition(
  root,
  factory
) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["Choices"] = factory();
  else root["Choices"] = factory();
})(this, function () {
  return (function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = (installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false,
      });
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "/assets/scripts/dist/";
    return __webpack_require__(0);
  })([
    function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(1);
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _createClass = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      var _fuse = __webpack_require__(2);
      var _fuse2 = _interopRequireDefault(_fuse);
      var _classnames = __webpack_require__(3);
      var _classnames2 = _interopRequireDefault(_classnames);
      var _index = __webpack_require__(4);
      var _index2 = _interopRequireDefault(_index);
      var _index3 = __webpack_require__(31);
      var _utils = __webpack_require__(32);
      __webpack_require__(33);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Choices = (function () {
        function Choices() {
          var element =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : "[data-choice]";
          var userConfig =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          _classCallCheck(this, Choices);
          if ((0, _utils.isType)("String", element)) {
            var elements = document.querySelectorAll(element);
            if (elements.length > 1) {
              for (var i = 1; i < elements.length; i++) {
                var el = elements[i];
                new Choices(el, userConfig);
              }
            }
          }
          var defaultConfig = {
            silent: false,
            items: [],
            choices: [],
            renderChoiceLimit: -1,
            maxItemCount: -1,
            addItems: true,
            removeItems: true,
            removeItemButton: false,
            editItems: false,
            duplicateItems: true,
            delimiter: ",",
            paste: true,
            searchEnabled: true,
            searchChoices: true,
            searchFloor: 1,
            searchResultLimit: 4,
            searchFields: ["label", "value"],
            position: "auto",
            resetScrollPosition: true,
            regexFilter: null,
            shouldSort: true,
            shouldSortItems: false,
            sortFilter: _utils.sortByAlpha,
            placeholder: true,
            placeholderValue: null,
            searchPlaceholderValue: null,
            prependValue: null,
            appendValue: null,
            renderSelectedChoices: "auto",
            loadingText: "Loading...",
            noResultsText: "No results found",
            noChoicesText: "No choices to choose from",
            itemSelectText: "Press to select",
            addItemText: function addItemText(value) {
              return (
                'Press Enter to add <b>"' +
                (0, _utils.stripHTML)(value) +
                '"</b>'
              );
            },
            maxItemText: function maxItemText(maxItemCount) {
              return "Only " + maxItemCount + " values can be added.";
            },
            itemComparer: function itemComparer(choice, item) {
              return choice === item;
            },
            uniqueItemText: "Only unique values can be added.",
            classNames: {
              containerOuter: "choices",
              containerInner: "choices__inner",
              input: "choices__input",
              inputCloned: "choices__input--cloned",
              list: "choices__list",
              listItems: "choices__list--multiple",
              listSingle: "choices__list--single",
              listDropdown: "choices__list--dropdown",
              item: "choices__item",
              itemSelectable: "choices__item--selectable",
              itemDisabled: "choices__item--disabled",
              itemChoice: "choices__item--choice",
              placeholder: "choices__placeholder",
              group: "choices__group",
              groupHeading: "choices__heading",
              button: "choices__button",
              activeState: "is-active",
              focusState: "is-focused",
              openState: "is-open",
              disabledState: "is-disabled",
              highlightedState: "is-highlighted",
              hiddenState: "is-hidden",
              flippedState: "is-flipped",
              loadingState: "is-loading",
              noResults: "has-no-results",
              noChoices: "has-no-choices",
            },
            fuseOptions: { include: "score" },
            callbackOnInit: null,
            callbackOnCreateTemplates: null,
          };
          this.idNames = { itemChoice: "item-choice" };
          this.config = (0, _utils.extend)(defaultConfig, userConfig);
          if (
            this.config.renderSelectedChoices !== "auto" &&
            this.config.renderSelectedChoices !== "always"
          ) {
            if (!this.config.silent) {
              console.warn(
                "renderSelectedChoices: Possible values are 'auto' and 'always'. Falling back to 'auto'."
              );
            }
            this.config.renderSelectedChoices = "auto";
          }
          this.store = new _index2.default(this.render);
          this.initialised = false;
          this.currentState = {};
          this.prevState = {};
          this.currentValue = "";
          this.element = element;
          this.passedElement = (0, _utils.isType)("String", element)
            ? document.querySelector(element)
            : element;
          if (!this.passedElement) {
            if (!this.config.silent) {
              console.error("Passed element not found");
            }
            return;
          }
          this.isTextElement = this.passedElement.type === "text";
          this.isSelectOneElement = this.passedElement.type === "select-one";
          this.isSelectMultipleElement =
            this.passedElement.type === "select-multiple";
          this.isSelectElement =
            this.isSelectOneElement || this.isSelectMultipleElement;
          this.isValidElementType = this.isTextElement || this.isSelectElement;
          this.isIe11 = !!(
            navigator.userAgent.match(/Trident/) &&
            navigator.userAgent.match(/rv[ :]11/)
          );
          this.isScrollingOnIe = false;
          if (this.config.shouldSortItems === true && this.isSelectOneElement) {
            if (!this.config.silent) {
              console.warn(
                "shouldSortElements: Type of passed element is 'select-one', falling back to false."
              );
            }
          }
          this.highlightPosition = 0;
          this.canSearch = this.config.searchEnabled;
          this.placeholder = false;
          if (!this.isSelectOneElement) {
            this.placeholder = this.config.placeholder
              ? this.config.placeholderValue ||
                this.passedElement.getAttribute("placeholder")
              : false;
          }
          this.presetChoices = this.config.choices;
          this.presetItems = this.config.items;
          if (this.passedElement.value) {
            this.presetItems = this.presetItems.concat(
              this.passedElement.value.split(this.config.delimiter)
            );
          }
          this.baseId = (0, _utils.generateId)(this.passedElement, "choices-");
          this.render = this.render.bind(this);
          this._onFocus = this._onFocus.bind(this);
          this._onBlur = this._onBlur.bind(this);
          this._onKeyUp = this._onKeyUp.bind(this);
          this._onKeyDown = this._onKeyDown.bind(this);
          this._onClick = this._onClick.bind(this);
          this._onTouchMove = this._onTouchMove.bind(this);
          this._onTouchEnd = this._onTouchEnd.bind(this);
          this._onMouseDown = this._onMouseDown.bind(this);
          this._onMouseOver = this._onMouseOver.bind(this);
          this._onPaste = this._onPaste.bind(this);
          this._onInput = this._onInput.bind(this);
          this.wasTap = true;
          var cuttingTheMustard = "classList" in document.documentElement;
          if (!cuttingTheMustard && !this.config.silent) {
            console.error("Choices: Your browser doesn't support Choices");
          }
          var canInit =
            (0, _utils.isElement)(this.passedElement) &&
            this.isValidElementType;
          if (canInit) {
            if (this.passedElement.getAttribute("data-choice") === "active") {
              return;
            }
            this.init();
          } else if (!this.config.silent) {
            console.error("Incompatible input passed");
          }
        }
        _createClass(Choices, [
          {
            key: "init",
            value: function init() {
              if (this.initialised === true) {
                return;
              }
              var callback = this.config.callbackOnInit;
              this.initialised = true;
              this._createTemplates();
              this._createInput();
              this.store.subscribe(this.render);
              this.render();
              this._addEventListeners();
              if (callback) {
                if ((0, _utils.isType)("Function", callback)) {
                  callback.call(this);
                }
              }
            },
          },
          {
            key: "destroy",
            value: function destroy() {
              if (this.initialised === false) {
                return;
              }
              this._removeEventListeners();
              this.passedElement.classList.remove(
                this.config.classNames.input,
                this.config.classNames.hiddenState
              );
              this.passedElement.removeAttribute("tabindex");
              var origStyle = this.passedElement.getAttribute(
                "data-choice-orig-style"
              );
              if (Boolean(origStyle)) {
                this.passedElement.removeAttribute("data-choice-orig-style");
                this.passedElement.setAttribute("style", origStyle);
              } else {
                this.passedElement.removeAttribute("style");
              }
              this.passedElement.removeAttribute("aria-hidden");
              this.passedElement.removeAttribute("data-choice");
              this.passedElement.value = this.passedElement.value;
              this.containerOuter.parentNode.insertBefore(
                this.passedElement,
                this.containerOuter
              );
              this.containerOuter.parentNode.removeChild(this.containerOuter);
              this.clearStore();
              this.config.templates = null;
              this.initialised = false;
            },
          },
          {
            key: "renderGroups",
            value: function renderGroups(groups, choices, fragment) {
              var _this = this;
              var groupFragment = fragment || document.createDocumentFragment();
              var filter = this.config.sortFilter;
              if (this.config.shouldSort) {
                groups.sort(filter);
              }
              groups.forEach(function (group) {
                var groupChoices = choices.filter(function (choice) {
                  if (_this.isSelectOneElement) {
                    return choice.groupId === group.id;
                  }
                  return choice.groupId === group.id && !choice.selected;
                });
                if (groupChoices.length >= 1) {
                  var dropdownGroup = _this._getTemplate("choiceGroup", group);
                  groupFragment.appendChild(dropdownGroup);
                  _this.renderChoices(groupChoices, groupFragment, true);
                }
              });
              return groupFragment;
            },
          },
          {
            key: "renderChoices",
            value: function renderChoices(choices, fragment) {
              var _this2 = this;
              var withinGroup =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : false;
              var choicesFragment =
                fragment || document.createDocumentFragment();
              var _config = this.config,
                renderSelectedChoices = _config.renderSelectedChoices,
                searchResultLimit = _config.searchResultLimit,
                renderChoiceLimit = _config.renderChoiceLimit;
              var filter = this.isSearching
                ? _utils.sortByScore
                : this.config.sortFilter;
              var appendChoice = function appendChoice(choice) {
                var shouldRender =
                  renderSelectedChoices === "auto"
                    ? _this2.isSelectOneElement || !choice.selected
                    : true;
                if (shouldRender) {
                  var dropdownItem = _this2._getTemplate("choice", choice);
                  choicesFragment.appendChild(dropdownItem);
                }
              };
              var rendererableChoices = choices;
              if (
                renderSelectedChoices === "auto" &&
                !this.isSelectOneElement
              ) {
                rendererableChoices = choices.filter(function (choice) {
                  return !choice.selected;
                });
              }
              var _rendererableChoices$ = rendererableChoices.reduce(
                  function (acc, choice) {
                    if (choice.placeholder) {
                      acc.placeholderChoices.push(choice);
                    } else {
                      acc.normalChoices.push(choice);
                    }
                    return acc;
                  },
                  { placeholderChoices: [], normalChoices: [] }
                ),
                placeholderChoices = _rendererableChoices$.placeholderChoices,
                normalChoices = _rendererableChoices$.normalChoices;
              if (this.config.shouldSort || this.isSearching) {
                normalChoices.sort(filter);
              }
              var choiceLimit = rendererableChoices.length;
              var sortedChoices = [].concat(
                _toConsumableArray(placeholderChoices),
                _toConsumableArray(normalChoices)
              );
              if (this.isSearching) {
                choiceLimit = searchResultLimit;
              } else if (renderChoiceLimit > 0 && !withinGroup) {
                choiceLimit = renderChoiceLimit;
              }
              for (var i = 0; i < choiceLimit; i++) {
                if (sortedChoices[i]) {
                  appendChoice(sortedChoices[i]);
                }
              }
              return choicesFragment;
            },
          },
          {
            key: "renderItems",
            value: function renderItems(items) {
              var _this3 = this;
              var fragment =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;
              var itemListFragment =
                fragment || document.createDocumentFragment();
              if (this.config.shouldSortItems && !this.isSelectOneElement) {
                items.sort(this.config.sortFilter);
              }
              if (this.isTextElement) {
                var itemsFiltered = this.store.getItemsReducedToValues(items);
                var itemsFilteredString = itemsFiltered.join(
                  this.config.delimiter
                );
                this.passedElement.setAttribute("value", itemsFilteredString);
                this.passedElement.value = itemsFilteredString;
              } else {
                var selectedOptionsFragment = document.createDocumentFragment();
                items.forEach(function (item) {
                  var option = _this3._getTemplate("option", item);
                  selectedOptionsFragment.appendChild(option);
                });
                this.passedElement.innerHTML = "";
                this.passedElement.appendChild(selectedOptionsFragment);
              }
              items.forEach(function (item) {
                var listItem = _this3._getTemplate("item", item);
                itemListFragment.appendChild(listItem);
              });
              return itemListFragment;
            },
          },
          {
            key: "render",
            value: function render() {
              if (this.store.isLoading()) {
                return;
              }
              this.currentState = this.store.getState();
              if (this.currentState !== this.prevState) {
                if (
                  this.currentState.choices !== this.prevState.choices ||
                  this.currentState.groups !== this.prevState.groups ||
                  this.currentState.items !== this.prevState.items
                ) {
                  if (this.isSelectElement) {
                    var activeGroups = this.store.getGroupsFilteredByActive();
                    var activeChoices = this.store.getChoicesFilteredByActive();
                    var choiceListFragment = document.createDocumentFragment();
                    this.choiceList.innerHTML = "";
                    if (this.config.resetScrollPosition) {
                      this.choiceList.scrollTop = 0;
                    }
                    if (activeGroups.length >= 1 && this.isSearching !== true) {
                      choiceListFragment = this.renderGroups(
                        activeGroups,
                        activeChoices,
                        choiceListFragment
                      );
                    } else if (activeChoices.length >= 1) {
                      choiceListFragment = this.renderChoices(
                        activeChoices,
                        choiceListFragment
                      );
                    }
                    var activeItems = this.store.getItemsFilteredByActive();
                    var canAddItem = this._canAddItem(
                      activeItems,
                      this.input.value
                    );
                    if (
                      choiceListFragment.childNodes &&
                      choiceListFragment.childNodes.length > 0
                    ) {
                      if (canAddItem.response) {
                        this.choiceList.appendChild(choiceListFragment);
                        this._highlightChoice();
                      } else {
                        this.choiceList.appendChild(
                          this._getTemplate("notice", canAddItem.notice)
                        );
                      }
                    } else {
                      var dropdownItem = void 0;
                      var notice = void 0;
                      if (this.isSearching) {
                        notice = (0, _utils.isType)(
                          "Function",
                          this.config.noResultsText
                        )
                          ? this.config.noResultsText()
                          : this.config.noResultsText;
                        dropdownItem = this._getTemplate(
                          "notice",
                          notice,
                          "no-results"
                        );
                      } else {
                        notice = (0, _utils.isType)(
                          "Function",
                          this.config.noChoicesText
                        )
                          ? this.config.noChoicesText()
                          : this.config.noChoicesText;
                        dropdownItem = this._getTemplate(
                          "notice",
                          notice,
                          "no-choices"
                        );
                      }
                      this.choiceList.appendChild(dropdownItem);
                    }
                  }
                }
                if (this.currentState.items !== this.prevState.items) {
                  var _activeItems = this.store.getItemsFilteredByActive();
                  this.itemList.innerHTML = "";
                  if (_activeItems && _activeItems) {
                    var itemListFragment = this.renderItems(_activeItems);
                    if (itemListFragment.childNodes) {
                      this.itemList.appendChild(itemListFragment);
                    }
                  }
                }
                this.prevState = this.currentState;
              }
            },
          },
          {
            key: "highlightItem",
            value: function highlightItem(item) {
              var runEvent =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : true;
              if (!item) {
                return this;
              }
              var id = item.id;
              var groupId = item.groupId;
              var group =
                groupId >= 0 ? this.store.getGroupById(groupId) : null;
              this.store.dispatch((0, _index3.highlightItem)(id, true));
              if (runEvent) {
                if (group && group.value) {
                  (0, _utils.triggerEvent)(
                    this.passedElement,
                    "highlightItem",
                    {
                      id: id,
                      value: item.value,
                      label: item.label,
                      groupValue: group.value,
                    }
                  );
                } else {
                  (0, _utils.triggerEvent)(
                    this.passedElement,
                    "highlightItem",
                    { id: id, value: item.value, label: item.label }
                  );
                }
              }
              return this;
            },
          },
          {
            key: "unhighlightItem",
            value: function unhighlightItem(item) {
              if (!item) {
                return this;
              }
              var id = item.id;
              var groupId = item.groupId;
              var group =
                groupId >= 0 ? this.store.getGroupById(groupId) : null;
              this.store.dispatch((0, _index3.highlightItem)(id, false));
              if (group && group.value) {
                (0, _utils.triggerEvent)(
                  this.passedElement,
                  "unhighlightItem",
                  {
                    id: id,
                    value: item.value,
                    label: item.label,
                    groupValue: group.value,
                  }
                );
              } else {
                (0, _utils.triggerEvent)(
                  this.passedElement,
                  "unhighlightItem",
                  { id: id, value: item.value, label: item.label }
                );
              }
              return this;
            },
          },
          {
            key: "highlightAll",
            value: function highlightAll() {
              var _this4 = this;
              var items = this.store.getItems();
              items.forEach(function (item) {
                _this4.highlightItem(item);
              });
              return this;
            },
          },
          {
            key: "unhighlightAll",
            value: function unhighlightAll() {
              var _this5 = this;
              var items = this.store.getItems();
              items.forEach(function (item) {
                _this5.unhighlightItem(item);
              });
              return this;
            },
          },
          {
            key: "removeItemsByValue",
            value: function removeItemsByValue(value) {
              var _this6 = this;
              if (!value || !(0, _utils.isType)("String", value)) {
                return this;
              }
              var items = this.store.getItemsFilteredByActive();
              items.forEach(function (item) {
                if (item.value === value) {
                  _this6._removeItem(item);
                }
              });
              return this;
            },
          },
          {
            key: "removeActiveItems",
            value: function removeActiveItems(excludedId) {
              var _this7 = this;
              var items = this.store.getItemsFilteredByActive();
              items.forEach(function (item) {
                if (item.active && excludedId !== item.id) {
                  _this7._removeItem(item);
                }
              });
              return this;
            },
          },
          {
            key: "removeHighlightedItems",
            value: function removeHighlightedItems() {
              var _this8 = this;
              var runEvent =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : false;
              var items = this.store.getItemsFilteredByActive();
              items.forEach(function (item) {
                if (item.highlighted && item.active) {
                  _this8._removeItem(item);
                  if (runEvent) {
                    _this8._triggerChange(item.value);
                  }
                }
              });
              return this;
            },
          },
          {
            key: "showDropdown",
            value: function showDropdown() {
              var focusInput =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : false;
              var body = document.body;
              var html = document.documentElement;
              var winHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
              );
              this.containerOuter.classList.add(
                this.config.classNames.openState
              );
              this.containerOuter.setAttribute("aria-expanded", "true");
              this.dropdown.classList.add(this.config.classNames.activeState);
              this.dropdown.setAttribute("aria-expanded", "true");
              var dimensions = this.dropdown.getBoundingClientRect();
              var dropdownPos = Math.ceil(
                dimensions.top + window.scrollY + this.dropdown.offsetHeight
              );
              var shouldFlip = false;
              if (this.config.position === "auto") {
                shouldFlip = dropdownPos >= winHeight;
              } else if (this.config.position === "top") {
                shouldFlip = true;
              }
              if (shouldFlip) {
                this.containerOuter.classList.add(
                  this.config.classNames.flippedState
                );
              }
              if (
                focusInput &&
                this.canSearch &&
                document.activeElement !== this.input
              ) {
                this.input.focus();
              }
              (0, _utils.triggerEvent)(this.passedElement, "showDropdown", {});
              return this;
            },
          },
          {
            key: "hideDropdown",
            value: function hideDropdown() {
              var blurInput =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : false;
              var isFlipped = this.containerOuter.classList.contains(
                this.config.classNames.flippedState
              );
              this.containerOuter.classList.remove(
                this.config.classNames.openState
              );
              this.containerOuter.setAttribute("aria-expanded", "false");
              this.dropdown.classList.remove(
                this.config.classNames.activeState
              );
              this.dropdown.setAttribute("aria-expanded", "false");
              if (isFlipped) {
                this.containerOuter.classList.remove(
                  this.config.classNames.flippedState
                );
              }
              if (
                blurInput &&
                this.canSearch &&
                document.activeElement === this.input
              ) {
                this.input.blur();
              }
              (0, _utils.triggerEvent)(this.passedElement, "hideDropdown", {});
              return this;
            },
          },
          {
            key: "toggleDropdown",
            value: function toggleDropdown() {
              var hasActiveDropdown = this.dropdown.classList.contains(
                this.config.classNames.activeState
              );
              if (hasActiveDropdown) {
                this.hideDropdown();
              } else {
                this.showDropdown(true);
              }
              return this;
            },
          },
          {
            key: "getValue",
            value: function getValue() {
              var _this9 = this;
              var valueOnly =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : false;
              var items = this.store.getItemsFilteredByActive();
              var selectedItems = [];
              items.forEach(function (item) {
                if (_this9.isTextElement) {
                  selectedItems.push(valueOnly ? item.value : item);
                } else if (item.active) {
                  selectedItems.push(valueOnly ? item.value : item);
                }
              });
              if (this.isSelectOneElement) {
                return selectedItems[0];
              }
              return selectedItems;
            },
          },
          {
            key: "setValue",
            value: function setValue(args) {
              var _this10 = this;
              if (this.initialised === true) {
                var values = [].concat(_toConsumableArray(args)),
                  handleValue = function handleValue(item) {
                    var itemType = (0, _utils.getType)(item);
                    if (itemType === "Object") {
                      if (!item.value) {
                        return;
                      }
                      if (!_this10.isTextElement) {
                        _this10._addChoice(
                          item.value,
                          item.label,
                          true,
                          false,
                          -1,
                          item.customProperties,
                          item.placeholder
                        );
                      } else {
                        _this10._addItem(
                          item.value,
                          item.label,
                          item.id,
                          undefined,
                          item.customProperties,
                          item.placeholder
                        );
                      }
                    } else if (itemType === "String") {
                      if (!_this10.isTextElement) {
                        _this10._addChoice(item, item, true, false, -1, null);
                      } else {
                        _this10._addItem(item);
                      }
                    }
                  };
                if (values.length > 1) {
                  values.forEach(function (value) {
                    handleValue(value);
                  });
                } else {
                  handleValue(values[0]);
                }
              }
              return this;
            },
          },
          {
            key: "setValueByChoice",
            value: function setValueByChoice(value) {
              var _this11 = this;
              if (!this.isTextElement) {
                var choices = this.store.getChoices();
                var choiceValue = (0, _utils.isType)("Array", value)
                  ? value
                  : [value];
                choiceValue.forEach(function (val) {
                  var foundChoice = choices.find(function (choice) {
                    return _this11.config.itemComparer(choice.value, val);
                  });
                  if (foundChoice) {
                    if (!foundChoice.selected) {
                      _this11._addItem(
                        foundChoice.value,
                        foundChoice.label,
                        foundChoice.id,
                        foundChoice.groupId,
                        foundChoice.customProperties,
                        foundChoice.placeholder,
                        foundChoice.keyCode
                      );
                    } else if (!_this11.config.silent) {
                      console.warn(
                        "Attempting to select choice already selected"
                      );
                    }
                  } else if (!_this11.config.silent) {
                    console.warn(
                      "Attempting to select choice that does not exist"
                    );
                  }
                });
              }
              return this;
            },
          },
          {
            key: "setChoices",
            value: function setChoices(choices, value, label) {
              var _this12 = this;
              var replaceChoices =
                arguments.length > 3 && arguments[3] !== undefined
                  ? arguments[3]
                  : false;
              if (this.initialised === true) {
                if (this.isSelectElement) {
                  if (!(0, _utils.isType)("Array", choices) || !value) {
                    return this;
                  }
                  if (replaceChoices) {
                    this._clearChoices();
                  }
                  this._setLoading(true);
                  if (choices && choices.length) {
                    this.containerOuter.classList.remove(
                      this.config.classNames.loadingState
                    );
                    choices.forEach(function (result) {
                      if (result.choices) {
                        _this12._addGroup(
                          result,
                          result.id || null,
                          value,
                          label
                        );
                      } else {
                        _this12._addChoice(
                          result[value],
                          result[label],
                          result.selected,
                          result.disabled,
                          undefined,
                          result.customProperties,
                          result.placeholder
                        );
                      }
                    });
                  }
                  this._setLoading(false);
                }
              }
              return this;
            },
          },
          {
            key: "clearStore",
            value: function clearStore() {
              this.store.dispatch((0, _index3.clearAll)());
              return this;
            },
          },
          {
            key: "clearInput",
            value: function clearInput() {
              if (this.input.value) {
                this.input.value = "";
              }
              if (!this.isSelectOneElement) {
                this._setInputWidth();
              }
              if (!this.isTextElement && this.config.searchEnabled) {
                this.isSearching = false;
                this.store.dispatch((0, _index3.activateChoices)(true));
              }
              return this;
            },
          },
          {
            key: "enable",
            value: function enable() {
              if (this.initialised) {
                this.passedElement.disabled = false;
                var isDisabled = this.containerOuter.classList.contains(
                  this.config.classNames.disabledState
                );
                if (isDisabled) {
                  this._addEventListeners();
                  this.passedElement.removeAttribute("disabled");
                  this.input.removeAttribute("disabled");
                  this.containerOuter.classList.remove(
                    this.config.classNames.disabledState
                  );
                  this.containerOuter.removeAttribute("aria-disabled");
                  if (this.isSelectOneElement) {
                    this.containerOuter.setAttribute("tabindex", "0");
                  }
                }
              }
              return this;
            },
          },
          {
            key: "disable",
            value: function disable() {
              if (this.initialised) {
                this.passedElement.disabled = true;
                var isEnabled = !this.containerOuter.classList.contains(
                  this.config.classNames.disabledState
                );
                if (isEnabled) {
                  this._removeEventListeners();
                  this.passedElement.setAttribute("disabled", "");
                  this.input.setAttribute("disabled", "");
                  this.containerOuter.classList.add(
                    this.config.classNames.disabledState
                  );
                  this.containerOuter.setAttribute("aria-disabled", "true");
                  if (this.isSelectOneElement) {
                    this.containerOuter.setAttribute("tabindex", "-1");
                  }
                }
              }
              return this;
            },
          },
          {
            key: "ajax",
            value: function ajax(fn) {
              var _this13 = this;
              if (this.initialised === true) {
                if (this.isSelectElement) {
                  requestAnimationFrame(function () {
                    _this13._handleLoadingState(true);
                  });
                  fn(this._ajaxCallback());
                }
              }
              return this;
            },
          },
          {
            key: "_triggerChange",
            value: function _triggerChange(value) {
              if (!value) {
                return;
              }
              (0, _utils.triggerEvent)(this.passedElement, "change", {
                value: value,
              });
            },
          },
          {
            key: "_handleButtonAction",
            value: function _handleButtonAction(activeItems, element) {
              if (!activeItems || !element) {
                return;
              }
              if (this.config.removeItems && this.config.removeItemButton) {
                var itemId = element.parentNode.getAttribute("data-id");
                var itemToRemove = activeItems.find(function (item) {
                  return item.id === parseInt(itemId, 10);
                });
                this._removeItem(itemToRemove);
                this._triggerChange(itemToRemove.value);
                if (this.isSelectOneElement) {
                  this._selectPlaceholderChoice();
                }
              }
            },
          },
          {
            key: "_selectPlaceholderChoice",
            value: function _selectPlaceholderChoice() {
              var placeholderChoice = this.store.getPlaceholderChoice();
              if (placeholderChoice) {
                this._addItem(
                  placeholderChoice.value,
                  placeholderChoice.label,
                  placeholderChoice.id,
                  placeholderChoice.groupId,
                  null,
                  placeholderChoice.placeholder
                );
                this._triggerChange(placeholderChoice.value);
              }
            },
          },
          {
            key: "_handleItemAction",
            value: function _handleItemAction(activeItems, element) {
              var _this14 = this;
              var hasShiftKey =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : false;
              if (!activeItems || !element) {
                return;
              }
              if (this.config.removeItems && !this.isSelectOneElement) {
                var passedId = element.getAttribute("data-id");
                activeItems.forEach(function (item) {
                  if (item.id === parseInt(passedId, 10) && !item.highlighted) {
                    _this14.highlightItem(item);
                  } else if (!hasShiftKey) {
                    if (item.highlighted) {
                      _this14.unhighlightItem(item);
                    }
                  }
                });
                if (document.activeElement !== this.input) {
                  this.input.focus();
                }
              }
            },
          },
          {
            key: "_handleChoiceAction",
            value: function _handleChoiceAction(activeItems, element) {
              if (!activeItems || !element) {
                return;
              }
              var id = element.getAttribute("data-id");
              var choice = this.store.getChoiceById(id);
              var passedKeyCode =
                activeItems[0] && activeItems[0].keyCode
                  ? activeItems[0].keyCode
                  : null;
              var hasActiveDropdown = this.dropdown.classList.contains(
                this.config.classNames.activeState
              );
              choice.keyCode = passedKeyCode;
              (0, _utils.triggerEvent)(this.passedElement, "choice", {
                choice: choice,
              });
              if (choice && !choice.selected && !choice.disabled) {
                var canAddItem = this._canAddItem(activeItems, choice.value);
                if (canAddItem.response) {
                  this._addItem(
                    choice.value,
                    choice.label,
                    choice.id,
                    choice.groupId,
                    choice.customProperties,
                    choice.placeholder,
                    choice.keyCode
                  );
                  this._triggerChange(choice.value);
                }
              }
              this.clearInput();
              if (hasActiveDropdown && this.isSelectOneElement) {
                this.hideDropdown();
                this.containerOuter.focus();
              }
            },
          },
          {
            key: "_handleBackspace",
            value: function _handleBackspace(activeItems) {
              if (this.config.removeItems && activeItems) {
                var lastItem = activeItems[activeItems.length - 1];
                var hasHighlightedItems = activeItems.some(function (item) {
                  return item.highlighted;
                });
                if (this.config.editItems && !hasHighlightedItems && lastItem) {
                  this.input.value = lastItem.value;
                  this._setInputWidth();
                  this._removeItem(lastItem);
                  this._triggerChange(lastItem.value);
                } else {
                  if (!hasHighlightedItems) {
                    this.highlightItem(lastItem, false);
                  }
                  this.removeHighlightedItems(true);
                }
              }
            },
          },
          {
            key: "_canAddItem",
            value: function _canAddItem(activeItems, value) {
              var canAddItem = true;
              var notice = (0, _utils.isType)(
                "Function",
                this.config.addItemText
              )
                ? this.config.addItemText(value)
                : this.config.addItemText;
              if (this.isSelectMultipleElement || this.isTextElement) {
                if (
                  this.config.maxItemCount > 0 &&
                  this.config.maxItemCount <= activeItems.length
                ) {
                  canAddItem = false;
                  notice = (0, _utils.isType)(
                    "Function",
                    this.config.maxItemText
                  )
                    ? this.config.maxItemText(this.config.maxItemCount)
                    : this.config.maxItemText;
                }
              }
              if (this.isTextElement && this.config.addItems && canAddItem) {
                if (this.config.regexFilter) {
                  canAddItem = this._regexFilter(value);
                }
              }
              var isUnique = !activeItems.some(function (item) {
                if ((0, _utils.isType)("String", value)) {
                  return item.value === value.trim();
                }
                return item.value === value;
              });
              if (
                !isUnique &&
                !this.config.duplicateItems &&
                !this.isSelectOneElement &&
                canAddItem
              ) {
                canAddItem = false;
                notice = (0, _utils.isType)(
                  "Function",
                  this.config.uniqueItemText
                )
                  ? this.config.uniqueItemText(value)
                  : this.config.uniqueItemText;
              }
              return { response: canAddItem, notice: notice };
            },
          },
          {
            key: "_handleLoadingState",
            value: function _handleLoadingState() {
              var setLoading =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : true;
              var placeholderItem = this.itemList.querySelector(
                "." + this.config.classNames.placeholder
              );
              if (setLoading) {
                this.containerOuter.classList.add(
                  this.config.classNames.loadingState
                );
                this.containerOuter.setAttribute("aria-busy", "true");
                if (this.isSelectOneElement) {
                  if (!placeholderItem) {
                    placeholderItem = this._getTemplate(
                      "placeholder",
                      this.config.loadingText
                    );
                    this.itemList.appendChild(placeholderItem);
                  } else {
                    placeholderItem.innerHTML = this.config.loadingText;
                  }
                } else {
                  this.input.placeholder = this.config.loadingText;
                }
              } else {
                this.containerOuter.classList.remove(
                  this.config.classNames.loadingState
                );
                if (this.isSelectOneElement) {
                  placeholderItem.innerHTML = this.placeholder || "";
                } else {
                  this.input.placeholder = this.placeholder || "";
                }
              }
            },
          },
          {
            key: "_ajaxCallback",
            value: function _ajaxCallback() {
              var _this15 = this;
              return function (results, value, label) {
                if (!results || !value) {
                  return;
                }
                var parsedResults = (0, _utils.isType)("Object", results)
                  ? [results]
                  : results;
                if (
                  parsedResults &&
                  (0, _utils.isType)("Array", parsedResults) &&
                  parsedResults.length
                ) {
                  _this15._handleLoadingState(false);
                  _this15._setLoading(true);
                  parsedResults.forEach(function (result) {
                    if (result.choices) {
                      var groupId = result.id || null;
                      _this15._addGroup(result, groupId, value, label);
                    } else {
                      _this15._addChoice(
                        result[value],
                        result[label],
                        result.selected,
                        result.disabled,
                        undefined,
                        result.customProperties,
                        result.placeholder
                      );
                    }
                  });
                  _this15._setLoading(false);
                  if (_this15.isSelectOneElement) {
                    _this15._selectPlaceholderChoice();
                  }
                } else {
                  _this15._handleLoadingState(false);
                }
                _this15.containerOuter.removeAttribute("aria-busy");
              };
            },
          },
          {
            key: "_searchChoices",
            value: function _searchChoices(value) {
              var newValue = (0, _utils.isType)("String", value)
                ? value.trim()
                : value;
              var currentValue = (0, _utils.isType)("String", this.currentValue)
                ? this.currentValue.trim()
                : this.currentValue;
              if (newValue.length >= 1 && newValue !== currentValue + " ") {
                var haystack = this.store.getSearchableChoices();
                var needle = newValue;
                var keys = (0, _utils.isType)("Array", this.config.searchFields)
                  ? this.config.searchFields
                  : [this.config.searchFields];
                var options = Object.assign(this.config.fuseOptions, {
                  keys: keys,
                });
                var fuse = new _fuse2.default(haystack, options);
                var results = fuse.search(needle);
                this.currentValue = newValue;
                this.highlightPosition = 0;
                this.isSearching = true;
                this.store.dispatch((0, _index3.filterChoices)(results));
                return results.length;
              }
              return 0;
            },
          },
          {
            key: "_handleSearch",
            value: function _handleSearch(value) {
              if (!value) {
                return;
              }
              var choices = this.store.getChoices();
              var hasUnactiveChoices = choices.some(function (option) {
                return !option.active;
              });
              if (this.input === document.activeElement) {
                if (value && value.length >= this.config.searchFloor) {
                  var resultCount = 0;
                  if (this.config.searchChoices) {
                    resultCount = this._searchChoices(value);
                  }
                  (0, _utils.triggerEvent)(this.passedElement, "search", {
                    value: value,
                    resultCount: resultCount,
                  });
                } else if (hasUnactiveChoices) {
                  this.isSearching = false;
                  this.store.dispatch((0, _index3.activateChoices)(true));
                }
              }
            },
          },
          {
            key: "_addEventListeners",
            value: function _addEventListeners() {
              document.addEventListener("keyup", this._onKeyUp);
              document.addEventListener("keydown", this._onKeyDown);
              document.addEventListener("click", this._onClick);
              document.addEventListener("touchmove", this._onTouchMove);
              document.addEventListener("touchend", this._onTouchEnd);
              document.addEventListener("mousedown", this._onMouseDown);
              document.addEventListener("mouseover", this._onMouseOver);
              if (this.isSelectOneElement) {
                this.containerOuter.addEventListener("focus", this._onFocus);
                this.containerOuter.addEventListener("blur", this._onBlur);
              }
              this.input.addEventListener("input", this._onInput);
              this.input.addEventListener("paste", this._onPaste);
              this.input.addEventListener("focus", this._onFocus);
              this.input.addEventListener("blur", this._onBlur);
            },
          },
          {
            key: "_removeEventListeners",
            value: function _removeEventListeners() {
              document.removeEventListener("keyup", this._onKeyUp);
              document.removeEventListener("keydown", this._onKeyDown);
              document.removeEventListener("click", this._onClick);
              document.removeEventListener("touchmove", this._onTouchMove);
              document.removeEventListener("touchend", this._onTouchEnd);
              document.removeEventListener("mousedown", this._onMouseDown);
              document.removeEventListener("mouseover", this._onMouseOver);
              if (this.isSelectOneElement) {
                this.containerOuter.removeEventListener("focus", this._onFocus);
                this.containerOuter.removeEventListener("blur", this._onBlur);
              }
              this.input.removeEventListener("input", this._onInput);
              this.input.removeEventListener("paste", this._onPaste);
              this.input.removeEventListener("focus", this._onFocus);
              this.input.removeEventListener("blur", this._onBlur);
            },
          },
          {
            key: "_setInputWidth",
            value: function _setInputWidth() {
              if (this.placeholder) {
                if (
                  this.input.value &&
                  this.input.value.length >= this.placeholder.length / 1.25
                ) {
                  this.input.style.width = (0, _utils.getWidthOfInput)(
                    this.input
                  );
                }
              } else {
                this.input.style.width = (0, _utils.getWidthOfInput)(
                  this.input
                );
              }
            },
          },
          {
            key: "_onKeyDown",
            value: function _onKeyDown(e) {
              var _this16 = this,
                _keyDownActions;
              if (
                e.target !== this.input &&
                !this.containerOuter.contains(e.target)
              ) {
                return;
              }
              var target = e.target;
              var activeItems = this.store.getItemsFilteredByActive();
              var hasFocusedInput = this.input === document.activeElement;
              var hasActiveDropdown = this.dropdown.classList.contains(
                this.config.classNames.activeState
              );
              var hasItems = this.itemList && this.itemList.children;
              var keyString = String.fromCharCode(e.keyCode);
              var backKey = 46;
              var deleteKey = 8;
              var enterKey = 13;
              var aKey = 65;
              var escapeKey = 27;
              var upKey = 38;
              var downKey = 40;
              var pageUpKey = 33;
              var pageDownKey = 34;
              var ctrlDownKey = e.ctrlKey || e.metaKey;
              if (
                !this.isTextElement &&
                /[a-zA-Z0-9-_ ]/.test(keyString) &&
                !hasActiveDropdown
              ) {
                this.showDropdown(true);
              }
              this.canSearch = this.config.searchEnabled;
              var onAKey = function onAKey() {
                if (ctrlDownKey && hasItems) {
                  _this16.canSearch = false;
                  if (
                    _this16.config.removeItems &&
                    !_this16.input.value &&
                    _this16.input === document.activeElement
                  ) {
                    _this16.highlightAll();
                  }
                }
              };
              var onEnterKey = function onEnterKey() {
                if (_this16.isTextElement && target.value) {
                  var value = _this16.input.value;
                  var canAddItem = _this16._canAddItem(activeItems, value);
                  if (canAddItem.response) {
                    if (hasActiveDropdown) {
                      _this16.hideDropdown();
                    }
                    _this16._addItem(value);
                    _this16._triggerChange(value);
                    _this16.clearInput();
                  }
                }
                if (target.hasAttribute("data-button")) {
                  _this16._handleButtonAction(activeItems, target);
                  e.preventDefault();
                }
                if (hasActiveDropdown) {
                  e.preventDefault();
                  var highlighted = _this16.dropdown.querySelector(
                    "." + _this16.config.classNames.highlightedState
                  );
                  if (highlighted) {
                    if (activeItems[0]) {
                      activeItems[0].keyCode = enterKey;
                    }
                    _this16._handleChoiceAction(activeItems, highlighted);
                  }
                } else if (_this16.isSelectOneElement) {
                  if (!hasActiveDropdown) {
                    _this16.showDropdown(true);
                    e.preventDefault();
                  }
                }
              };
              var onEscapeKey = function onEscapeKey() {
                if (hasActiveDropdown) {
                  _this16.toggleDropdown();
                  _this16.containerOuter.focus();
                }
              };
              var onDirectionKey = function onDirectionKey() {
                if (hasActiveDropdown || _this16.isSelectOneElement) {
                  if (!hasActiveDropdown) {
                    _this16.showDropdown(true);
                  }
                  _this16.canSearch = false;
                  var directionInt =
                    e.keyCode === downKey || e.keyCode === pageDownKey ? 1 : -1;
                  var skipKey =
                    e.metaKey ||
                    e.keyCode === pageDownKey ||
                    e.keyCode === pageUpKey;
                  var nextEl = void 0;
                  if (skipKey) {
                    if (directionInt > 0) {
                      nextEl = Array.from(
                        _this16.dropdown.querySelectorAll(
                          "[data-choice-selectable]"
                        )
                      ).pop();
                    } else {
                      nextEl = _this16.dropdown.querySelector(
                        "[data-choice-selectable]"
                      );
                    }
                  } else {
                    var currentEl = _this16.dropdown.querySelector(
                      "." + _this16.config.classNames.highlightedState
                    );
                    if (currentEl) {
                      nextEl = (0, _utils.getAdjacentEl)(
                        currentEl,
                        "[data-choice-selectable]",
                        directionInt
                      );
                    } else {
                      nextEl = _this16.dropdown.querySelector(
                        "[data-choice-selectable]"
                      );
                    }
                  }
                  if (nextEl) {
                    if (
                      !(0, _utils.isScrolledIntoView)(
                        nextEl,
                        _this16.choiceList,
                        directionInt
                      )
                    ) {
                      _this16._scrollToChoice(nextEl, directionInt);
                    }
                    _this16._highlightChoice(nextEl);
                  }
                  e.preventDefault();
                }
              };
              var onDeleteKey = function onDeleteKey() {
                if (
                  hasFocusedInput &&
                  !e.target.value &&
                  !_this16.isSelectOneElement
                ) {
                  _this16._handleBackspace(activeItems);
                  e.preventDefault();
                }
              };
              var keyDownActions =
                ((_keyDownActions = {}),
                _defineProperty(_keyDownActions, aKey, onAKey),
                _defineProperty(_keyDownActions, enterKey, onEnterKey),
                _defineProperty(_keyDownActions, escapeKey, onEscapeKey),
                _defineProperty(_keyDownActions, upKey, onDirectionKey),
                _defineProperty(_keyDownActions, pageUpKey, onDirectionKey),
                _defineProperty(_keyDownActions, downKey, onDirectionKey),
                _defineProperty(_keyDownActions, pageDownKey, onDirectionKey),
                _defineProperty(_keyDownActions, deleteKey, onDeleteKey),
                _defineProperty(_keyDownActions, backKey, onDeleteKey),
                _keyDownActions);
              if (keyDownActions[e.keyCode]) {
                keyDownActions[e.keyCode]();
              }
            },
          },
          {
            key: "_onKeyUp",
            value: function _onKeyUp(e) {
              if (e.target !== this.input) {
                return;
              }
              var value = this.input.value;
              var activeItems = this.store.getItemsFilteredByActive();
              var canAddItem = this._canAddItem(activeItems, value);
              if (this.isTextElement) {
                var hasActiveDropdown = this.dropdown.classList.contains(
                  this.config.classNames.activeState
                );
                if (value) {
                  if (canAddItem.notice) {
                    var dropdownItem = this._getTemplate(
                      "notice",
                      canAddItem.notice
                    );
                    this.dropdown.innerHTML = dropdownItem.outerHTML;
                  }
                  if (canAddItem.response === true) {
                    if (!hasActiveDropdown) {
                      this.showDropdown();
                    }
                  } else if (!canAddItem.notice && hasActiveDropdown) {
                    this.hideDropdown();
                  }
                } else if (hasActiveDropdown) {
                  this.hideDropdown();
                }
              } else {
                var backKey = 46;
                var deleteKey = 8;
                if (
                  (e.keyCode === backKey || e.keyCode === deleteKey) &&
                  !e.target.value
                ) {
                  if (!this.isTextElement && this.isSearching) {
                    this.isSearching = false;
                    this.store.dispatch((0, _index3.activateChoices)(true));
                  }
                } else if (this.canSearch && canAddItem.response) {
                  this._handleSearch(this.input.value);
                }
              }
              this.canSearch = this.config.searchEnabled;
            },
          },
          {
            key: "_onInput",
            value: function _onInput() {
              if (!this.isSelectOneElement) {
                this._setInputWidth();
              }
            },
          },
          {
            key: "_onTouchMove",
            value: function _onTouchMove() {
              if (this.wasTap === true) {
                this.wasTap = false;
              }
            },
          },
          {
            key: "_onTouchEnd",
            value: function _onTouchEnd(e) {
              var target = e.target || e.touches[0].target;
              var hasActiveDropdown = this.dropdown.classList.contains(
                this.config.classNames.activeState
              );
              if (
                this.wasTap === true &&
                this.containerOuter.contains(target)
              ) {
                if (
                  (target === this.containerOuter ||
                    target === this.containerInner) &&
                  !this.isSelectOneElement
                ) {
                  if (this.isTextElement) {
                    if (document.activeElement !== this.input) {
                      this.input.focus();
                    }
                  } else {
                    if (!hasActiveDropdown) {
                      this.showDropdown(true);
                    }
                  }
                }
                e.stopPropagation();
              }
              this.wasTap = true;
            },
          },
          {
            key: "_onMouseDown",
            value: function _onMouseDown(e) {
              var target = e.target;
              if (target === this.choiceList && this.isIe11) {
                this.isScrollingOnIe = true;
              }
              if (
                this.containerOuter.contains(target) &&
                target !== this.input
              ) {
                var foundTarget = void 0;
                var activeItems = this.store.getItemsFilteredByActive();
                var hasShiftKey = e.shiftKey;
                if (
                  (foundTarget = (0, _utils.findAncestorByAttrName)(
                    target,
                    "data-button"
                  ))
                ) {
                  this._handleButtonAction(activeItems, foundTarget);
                } else if (
                  (foundTarget = (0, _utils.findAncestorByAttrName)(
                    target,
                    "data-item"
                  ))
                ) {
                  this._handleItemAction(activeItems, foundTarget, hasShiftKey);
                } else if (
                  (foundTarget = (0, _utils.findAncestorByAttrName)(
                    target,
                    "data-choice"
                  ))
                ) {
                  this._handleChoiceAction(activeItems, foundTarget);
                }
                e.preventDefault();
              }
            },
          },
          {
            key: "_onClick",
            value: function _onClick(e) {
              var target = e.target;
              var hasActiveDropdown = this.dropdown.classList.contains(
                this.config.classNames.activeState
              );
              var activeItems = this.store.getItemsFilteredByActive();
              if (this.containerOuter.contains(target)) {
                if (target.hasAttribute("data-button")) {
                  this._handleButtonAction(activeItems, target);
                }
                if (!hasActiveDropdown) {
                  if (this.isTextElement) {
                    if (document.activeElement !== this.input) {
                      this.input.focus();
                    }
                  } else {
                    if (this.canSearch) {
                      this.showDropdown(true);
                    } else {
                      this.showDropdown();
                      this.containerOuter.focus();
                    }
                  }
                } else if (
                  this.isSelectOneElement &&
                  target !== this.input &&
                  !this.dropdown.contains(target)
                ) {
                  this.hideDropdown(true);
                }
              } else {
                var hasHighlightedItems = activeItems.some(function (item) {
                  return item.highlighted;
                });
                if (hasHighlightedItems) {
                  this.unhighlightAll();
                }
                this.containerOuter.classList.remove(
                  this.config.classNames.focusState
                );
                if (hasActiveDropdown) {
                  this.hideDropdown();
                }
              }
            },
          },
          {
            key: "_onMouseOver",
            value: function _onMouseOver(e) {
              if (
                e.target === this.dropdown ||
                this.dropdown.contains(e.target)
              ) {
                if (e.target.hasAttribute("data-choice"))
                  this._highlightChoice(e.target);
              }
            },
          },
          {
            key: "_onPaste",
            value: function _onPaste(e) {
              if (e.target === this.input && !this.config.paste) {
                e.preventDefault();
              }
            },
          },
          {
            key: "_onFocus",
            value: function _onFocus(e) {
              var _this17 = this;
              var target = e.target;
              if (this.containerOuter.contains(target)) {
                var hasActiveDropdown = this.dropdown.classList.contains(
                  this.config.classNames.activeState
                );
                var focusActions = {
                  text: function text() {
                    if (target === _this17.input) {
                      _this17.containerOuter.classList.add(
                        _this17.config.classNames.focusState
                      );
                    }
                  },
                  "select-one": function selectOne() {
                    _this17.containerOuter.classList.add(
                      _this17.config.classNames.focusState
                    );
                    if (target === _this17.input) {
                      if (!hasActiveDropdown) {
                        _this17.showDropdown();
                      }
                    }
                  },
                  "select-multiple": function selectMultiple() {
                    if (target === _this17.input) {
                      _this17.containerOuter.classList.add(
                        _this17.config.classNames.focusState
                      );
                      if (!hasActiveDropdown) {
                        _this17.showDropdown(true);
                      }
                    }
                  },
                };
                focusActions[this.passedElement.type]();
              }
            },
          },
          {
            key: "_onBlur",
            value: function _onBlur(e) {
              var _this18 = this;
              var target = e.target;
              if (
                this.containerOuter.contains(target) &&
                !this.isScrollingOnIe
              ) {
                var activeItems = this.store.getItemsFilteredByActive();
                var hasActiveDropdown = this.dropdown.classList.contains(
                  this.config.classNames.activeState
                );
                var hasHighlightedItems = activeItems.some(function (item) {
                  return item.highlighted;
                });
                var blurActions = {
                  text: function text() {
                    if (target === _this18.input) {
                      _this18.containerOuter.classList.remove(
                        _this18.config.classNames.focusState
                      );
                      if (hasHighlightedItems) {
                        _this18.unhighlightAll();
                      }
                      if (hasActiveDropdown) {
                        _this18.hideDropdown();
                      }
                    }
                  },
                  "select-one": function selectOne() {
                    _this18.containerOuter.classList.remove(
                      _this18.config.classNames.focusState
                    );
                    if (target === _this18.containerOuter) {
                      if (hasActiveDropdown && !_this18.canSearch) {
                        _this18.hideDropdown();
                      }
                    }
                    if (target === _this18.input && hasActiveDropdown) {
                      _this18.hideDropdown();
                    }
                  },
                  "select-multiple": function selectMultiple() {
                    if (target === _this18.input) {
                      _this18.containerOuter.classList.remove(
                        _this18.config.classNames.focusState
                      );
                      if (hasActiveDropdown) {
                        _this18.hideDropdown();
                      }
                      if (hasHighlightedItems) {
                        _this18.unhighlightAll();
                      }
                    }
                  },
                };
                blurActions[this.passedElement.type]();
              } else {
                this.isScrollingOnIe = false;
                this.input.focus();
              }
            },
          },
          {
            key: "_regexFilter",
            value: function _regexFilter(value) {
              if (!value) {
                return false;
              }
              var regex = this.config.regexFilter;
              var expression = new RegExp(regex.source, "i");
              return expression.test(value);
            },
          },
          {
            key: "_scrollToChoice",
            value: function _scrollToChoice(choice, direction) {
              var _this19 = this;
              if (!choice) {
                return;
              }
              var dropdownHeight = this.choiceList.offsetHeight;
              var choiceHeight = choice.offsetHeight;
              var choicePos = choice.offsetTop + choiceHeight;
              var containerScrollPos =
                this.choiceList.scrollTop + dropdownHeight;
              var endPoint =
                direction > 0
                  ? this.choiceList.scrollTop + choicePos - containerScrollPos
                  : choice.offsetTop;
              var animateScroll = function animateScroll() {
                var strength = 4;
                var choiceListScrollTop = _this19.choiceList.scrollTop;
                var continueAnimation = false;
                var easing = void 0;
                var distance = void 0;
                if (direction > 0) {
                  easing = (endPoint - choiceListScrollTop) / strength;
                  distance = easing > 1 ? easing : 1;
                  _this19.choiceList.scrollTop = choiceListScrollTop + distance;
                  if (choiceListScrollTop < endPoint) {
                    continueAnimation = true;
                  }
                } else {
                  easing = (choiceListScrollTop - endPoint) / strength;
                  distance = easing > 1 ? easing : 1;
                  _this19.choiceList.scrollTop = choiceListScrollTop - distance;
                  if (choiceListScrollTop > endPoint) {
                    continueAnimation = true;
                  }
                }
                if (continueAnimation) {
                  requestAnimationFrame(function (time) {
                    animateScroll(time, endPoint, direction);
                  });
                }
              };
              requestAnimationFrame(function (time) {
                animateScroll(time, endPoint, direction);
              });
            },
          },
          {
            key: "_highlightChoice",
            value: function _highlightChoice() {
              var _this20 = this;
              var el =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : null;
              var choices = Array.from(
                this.dropdown.querySelectorAll("[data-choice-selectable]")
              );
              var passedEl = el;
              if (choices && choices.length) {
                var highlightedChoices = Array.from(
                  this.dropdown.querySelectorAll(
                    "." + this.config.classNames.highlightedState
                  )
                );
                highlightedChoices.forEach(function (choice) {
                  choice.classList.remove(
                    _this20.config.classNames.highlightedState
                  );
                  choice.setAttribute("aria-selected", "false");
                });
                if (passedEl) {
                  this.highlightPosition = choices.indexOf(passedEl);
                } else {
                  if (choices.length > this.highlightPosition) {
                    passedEl = choices[this.highlightPosition];
                  } else {
                    passedEl = choices[choices.length - 1];
                  }
                  if (!passedEl) {
                    passedEl = choices[0];
                  }
                }
                passedEl.classList.add(this.config.classNames.highlightedState);
                passedEl.setAttribute("aria-selected", "true");
                this.containerOuter.setAttribute(
                  "aria-activedescendant",
                  passedEl.id
                );
              }
            },
          },
          {
            key: "_addItem",
            value: function _addItem(value) {
              var label =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;
              var choiceId =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : -1;
              var groupId =
                arguments.length > 3 && arguments[3] !== undefined
                  ? arguments[3]
                  : -1;
              var customProperties =
                arguments.length > 4 && arguments[4] !== undefined
                  ? arguments[4]
                  : null;
              var placeholder =
                arguments.length > 5 && arguments[5] !== undefined
                  ? arguments[5]
                  : false;
              var keyCode =
                arguments.length > 6 && arguments[6] !== undefined
                  ? arguments[6]
                  : null;
              var passedValue = (0, _utils.isType)("String", value)
                ? value.trim()
                : value;
              var passedKeyCode = keyCode;
              var items = this.store.getItems();
              var passedLabel = label || passedValue;
              var passedOptionId = parseInt(choiceId, 10) || -1;
              var group =
                groupId >= 0 ? this.store.getGroupById(groupId) : null;
              var id = items ? items.length + 1 : 1;
              if (this.config.prependValue) {
                passedValue = this.config.prependValue + passedValue.toString();
              }
              if (this.config.appendValue) {
                passedValue += this.config.appendValue.toString();
              }
              this.store.dispatch(
                (0, _index3.addItem)(
                  passedValue,
                  passedLabel,
                  id,
                  passedOptionId,
                  groupId,
                  customProperties,
                  placeholder,
                  passedKeyCode
                )
              );
              if (this.isSelectOneElement) {
                this.removeActiveItems(id);
              }
              if (group && group.value) {
                (0, _utils.triggerEvent)(this.passedElement, "addItem", {
                  id: id,
                  value: passedValue,
                  label: passedLabel,
                  groupValue: group.value,
                  keyCode: passedKeyCode,
                });
              } else {
                (0, _utils.triggerEvent)(this.passedElement, "addItem", {
                  id: id,
                  value: passedValue,
                  label: passedLabel,
                  keyCode: passedKeyCode,
                });
              }
              return this;
            },
          },
          {
            key: "_removeItem",
            value: function _removeItem(item) {
              if (!item || !(0, _utils.isType)("Object", item)) {
                return this;
              }
              var id = item.id;
              var value = item.value;
              var label = item.label;
              var choiceId = item.choiceId;
              var groupId = item.groupId;
              var group =
                groupId >= 0 ? this.store.getGroupById(groupId) : null;
              this.store.dispatch((0, _index3.removeItem)(id, choiceId));
              if (group && group.value) {
                (0, _utils.triggerEvent)(this.passedElement, "removeItem", {
                  id: id,
                  value: value,
                  label: label,
                  groupValue: group.value,
                });
              } else {
                (0, _utils.triggerEvent)(this.passedElement, "removeItem", {
                  id: id,
                  value: value,
                  label: label,
                });
              }
              return this;
            },
          },
          {
            key: "_addChoice",
            value: function _addChoice(value) {
              var label =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;
              var isSelected =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : false;
              var isDisabled =
                arguments.length > 3 && arguments[3] !== undefined
                  ? arguments[3]
                  : false;
              var groupId =
                arguments.length > 4 && arguments[4] !== undefined
                  ? arguments[4]
                  : -1;
              var customProperties =
                arguments.length > 5 && arguments[5] !== undefined
                  ? arguments[5]
                  : null;
              var placeholder =
                arguments.length > 6 && arguments[6] !== undefined
                  ? arguments[6]
                  : false;
              var keyCode =
                arguments.length > 7 && arguments[7] !== undefined
                  ? arguments[7]
                  : null;
              if (typeof value === "undefined" || value === null) {
                return;
              }
              var choices = this.store.getChoices();
              var choiceLabel = label || value;
              var choiceId = choices ? choices.length + 1 : 1;
              var choiceElementId =
                this.baseId + "-" + this.idNames.itemChoice + "-" + choiceId;
              this.store.dispatch(
                (0, _index3.addChoice)(
                  value,
                  choiceLabel,
                  choiceId,
                  groupId,
                  isDisabled,
                  choiceElementId,
                  customProperties,
                  placeholder,
                  keyCode
                )
              );
              if (isSelected) {
                this._addItem(
                  value,
                  choiceLabel,
                  choiceId,
                  undefined,
                  customProperties,
                  placeholder,
                  keyCode
                );
              }
            },
          },
          {
            key: "_clearChoices",
            value: function _clearChoices() {
              this.store.dispatch((0, _index3.clearChoices)());
            },
          },
          {
            key: "_addGroup",
            value: function _addGroup(group, id) {
              var _this21 = this;
              var valueKey =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : "value";
              var labelKey =
                arguments.length > 3 && arguments[3] !== undefined
                  ? arguments[3]
                  : "label";
              var groupChoices = (0, _utils.isType)("Object", group)
                ? group.choices
                : Array.from(group.getElementsByTagName("OPTION"));
              var groupId = id
                ? id
                : Math.floor(new Date().valueOf() * Math.random());
              var isDisabled = group.disabled ? group.disabled : false;
              if (groupChoices) {
                this.store.dispatch(
                  (0, _index3.addGroup)(group.label, groupId, true, isDisabled)
                );
                groupChoices.forEach(function (option) {
                  var isOptDisabled =
                    option.disabled ||
                    (option.parentNode && option.parentNode.disabled);
                  _this21._addChoice(
                    option[valueKey],
                    (0, _utils.isType)("Object", option)
                      ? option[labelKey]
                      : option.innerHTML,
                    option.selected,
                    isOptDisabled,
                    groupId,
                    option.customProperties,
                    option.placeholder
                  );
                });
              } else {
                this.store.dispatch(
                  (0, _index3.addGroup)(
                    group.label,
                    group.id,
                    false,
                    group.disabled
                  )
                );
              }
            },
          },
          {
            key: "_getTemplate",
            value: function _getTemplate(template) {
              if (!template) {
                return null;
              }
              var templates = this.config.templates;
              for (
                var _len = arguments.length,
                  args = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key];
              }
              return templates[template].apply(templates, args);
            },
          },
          {
            key: "_createTemplates",
            value: function _createTemplates() {
              var _this22 = this;
              var globalClasses = this.config.classNames;
              var templates = {
                containerOuter: function containerOuter(direction) {
                  return (0, _utils.strToEl)(
                    '\n          <div\n            class="' +
                      globalClasses.containerOuter +
                      '"\n            ' +
                      (_this22.isSelectElement
                        ? _this22.config.searchEnabled
                          ? 'role="combobox" aria-autocomplete="list"'
                          : 'role="listbox"'
                        : "") +
                      '\n            data-type="' +
                      _this22.passedElement.type +
                      '"\n            ' +
                      (_this22.isSelectOneElement ? 'tabindex="0"' : "") +
                      '\n            aria-haspopup="true"\n            aria-expanded="false"\n            dir="' +
                      direction +
                      '"\n            >\n          </div>\n        '
                  );
                },
                containerInner: function containerInner() {
                  return (0, _utils.strToEl)(
                    '\n          <div class="' +
                      globalClasses.containerInner +
                      '"></div>\n        '
                  );
                },
                itemList: function itemList() {
                  var _classNames;
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.list,
                    ((_classNames = {}),
                    _defineProperty(
                      _classNames,
                      globalClasses.listSingle,
                      _this22.isSelectOneElement
                    ),
                    _defineProperty(
                      _classNames,
                      globalClasses.listItems,
                      !_this22.isSelectOneElement
                    ),
                    _classNames)
                  );
                  return (0, _utils.strToEl)(
                    '\n          <div class="' +
                      localClasses +
                      '"></div>\n        '
                  );
                },
                placeholder: function placeholder(value) {
                  return (0, _utils.strToEl)(
                    '\n          <div class="' +
                      globalClasses.placeholder +
                      '">\n            ' +
                      value +
                      "\n          </div>\n        "
                  );
                },
                item: function item(data) {
                  var _classNames2;
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.item,
                    ((_classNames2 = {}),
                    _defineProperty(
                      _classNames2,
                      globalClasses.highlightedState,
                      data.highlighted
                    ),
                    _defineProperty(
                      _classNames2,
                      globalClasses.itemSelectable,
                      !data.highlighted
                    ),
                    _defineProperty(
                      _classNames2,
                      globalClasses.placeholder,
                      data.placeholder
                    ),
                    _classNames2)
                  );
                  if (_this22.config.removeItemButton) {
                    var _classNames3;
                    localClasses = (0, _classnames2.default)(
                      globalClasses.item,
                      ((_classNames3 = {}),
                      _defineProperty(
                        _classNames3,
                        globalClasses.highlightedState,
                        data.highlighted
                      ),
                      _defineProperty(
                        _classNames3,
                        globalClasses.itemSelectable,
                        !data.disabled
                      ),
                      _defineProperty(
                        _classNames3,
                        globalClasses.placeholder,
                        data.placeholder
                      ),
                      _classNames3)
                    );
                    return (0, _utils.strToEl)(
                      '\n            <div\n              class="' +
                        localClasses +
                        '"\n              data-item\n              data-id="' +
                        data.id +
                        '"\n              data-value="' +
                        data.value +
                        '"\n              data-deletable\n              ' +
                        (data.active ? 'aria-selected="true"' : "") +
                        "\n              " +
                        (data.disabled ? 'aria-disabled="true"' : "") +
                        "\n              >\n              " +
                        data.label +
                        '<!--\n           --><button\n                type="button"\n                class="' +
                        globalClasses.button +
                        '"\n                data-button\n                aria-label="Remove item: \'' +
                        data.value +
                        "'\"\n                >\n                Remove item\n              </button>\n            </div>\n          "
                    );
                  }
                  return (0, _utils.strToEl)(
                    '\n          <div\n            class="' +
                      localClasses +
                      '"\n            data-item\n            data-id="' +
                      data.id +
                      '"\n            data-value="' +
                      data.value +
                      '"\n            ' +
                      (data.active ? 'aria-selected="true"' : "") +
                      "\n            " +
                      (data.disabled ? 'aria-disabled="true"' : "") +
                      "\n            >\n            " +
                      data.label +
                      "\n          </div>\n        "
                  );
                },
                choiceList: function choiceList() {
                  return (0, _utils.strToEl)(
                    '\n          <div\n            class="' +
                      globalClasses.list +
                      '"\n            dir="ltr"\n            role="listbox"\n            ' +
                      (!_this22.isSelectOneElement
                        ? 'aria-multiselectable="true"'
                        : "") +
                      "\n            >\n          </div>\n        "
                  );
                },
                choiceGroup: function choiceGroup(data) {
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.group,
                    _defineProperty(
                      {},
                      globalClasses.itemDisabled,
                      data.disabled
                    )
                  );
                  return (0, _utils.strToEl)(
                    '\n          <div\n            class="' +
                      localClasses +
                      '"\n            data-group\n            data-id="' +
                      data.id +
                      '"\n            data-value="' +
                      data.value +
                      '"\n            role="group"\n            ' +
                      (data.disabled ? 'aria-disabled="true"' : "") +
                      '\n            >\n            <div class="' +
                      globalClasses.groupHeading +
                      '">' +
                      data.value +
                      "</div>\n          </div>\n        "
                  );
                },
                choice: function choice(data) {
                  var _classNames5;
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.item,
                    globalClasses.itemChoice,
                    ((_classNames5 = {}),
                    _defineProperty(
                      _classNames5,
                      globalClasses.itemDisabled,
                      data.disabled
                    ),
                    _defineProperty(
                      _classNames5,
                      globalClasses.itemSelectable,
                      !data.disabled
                    ),
                    _defineProperty(
                      _classNames5,
                      globalClasses.placeholder,
                      data.placeholder
                    ),
                    _classNames5)
                  );
                  return (0, _utils.strToEl)(
                    '\n          <div\n            class="' +
                      localClasses +
                      '"\n            data-select-text="' +
                      _this22.config.itemSelectText +
                      '"\n            data-choice\n            data-id="' +
                      data.id +
                      '"\n            data-value="' +
                      data.value +
                      '"\n            ' +
                      (data.disabled
                        ? 'data-choice-disabled aria-disabled="true"'
                        : "data-choice-selectable") +
                      '\n            id="' +
                      data.elementId +
                      '"\n            ' +
                      (data.groupId > 0 ? 'role="treeitem"' : 'role="option"') +
                      "\n            >\n            " +
                      data.label +
                      "\n          </div>\n        "
                  );
                },
                input: function input() {
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.input,
                    globalClasses.inputCloned
                  );
                  return (0, _utils.strToEl)(
                    '\n          <input\n            type="text"\n            class="' +
                      localClasses +
                      '"\n            autocomplete="off"\n            autocapitalize="off"\n            spellcheck="false"\n            role="textbox"\n            aria-autocomplete="list"\n            >\n        '
                  );
                },
                dropdown: function dropdown() {
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.list,
                    globalClasses.listDropdown
                  );
                  return (0, _utils.strToEl)(
                    '\n          <div\n            class="' +
                      localClasses +
                      '"\n            aria-expanded="false"\n            >\n          </div>\n        '
                  );
                },
                notice: function notice(label) {
                  var _classNames6;
                  var type =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : "";
                  var localClasses = (0, _classnames2.default)(
                    globalClasses.item,
                    globalClasses.itemChoice,
                    ((_classNames6 = {}),
                    _defineProperty(
                      _classNames6,
                      globalClasses.noResults,
                      type === "no-results"
                    ),
                    _defineProperty(
                      _classNames6,
                      globalClasses.noChoices,
                      type === "no-choices"
                    ),
                    _classNames6)
                  );
                  return (0, _utils.strToEl)(
                    '\n          <div class="' +
                      localClasses +
                      '">\n            ' +
                      label +
                      "\n          </div>\n        "
                  );
                },
                option: function option(data) {
                  return (0, _utils.strToEl)(
                    '\n          <option value="' +
                      data.value +
                      '" selected>' +
                      data.label +
                      "</option>\n        "
                  );
                },
              };
              var callbackTemplate = this.config.callbackOnCreateTemplates;
              var userTemplates = {};
              if (
                callbackTemplate &&
                (0, _utils.isType)("Function", callbackTemplate)
              ) {
                userTemplates = callbackTemplate.call(this, _utils.strToEl);
              }
              this.config.templates = (0, _utils.extend)(
                templates,
                userTemplates
              );
            },
          },
          {
            key: "_setLoading",
            value: function _setLoading(isLoading) {
              this.store.dispatch((0, _index3.setIsLoading)(isLoading));
            },
          },
          {
            key: "_createInput",
            value: function _createInput() {
              var _this23 = this;
              var direction = this.passedElement.getAttribute("dir") || "ltr";
              var containerOuter = this._getTemplate(
                "containerOuter",
                direction
              );
              var containerInner = this._getTemplate("containerInner");
              var itemList = this._getTemplate("itemList");
              var choiceList = this._getTemplate("choiceList");
              var input = this._getTemplate("input");
              var dropdown = this._getTemplate("dropdown");
              this.containerOuter = containerOuter;
              this.containerInner = containerInner;
              this.input = input;
              this.choiceList = choiceList;
              this.itemList = itemList;
              this.dropdown = dropdown;
              this.passedElement.classList.add(
                this.config.classNames.input,
                this.config.classNames.hiddenState
              );
              this.passedElement.tabIndex = "-1";
              var origStyle = this.passedElement.getAttribute("style");
              if (Boolean(origStyle)) {
                this.passedElement.setAttribute(
                  "data-choice-orig-style",
                  origStyle
                );
              }
              this.passedElement.setAttribute("style", "display:none;");
              this.passedElement.setAttribute("aria-hidden", "true");
              this.passedElement.setAttribute("data-choice", "active");
              (0, _utils.wrap)(this.passedElement, containerInner);
              (0, _utils.wrap)(containerInner, containerOuter);
              if (this.isSelectOneElement) {
                input.placeholder = this.config.searchPlaceholderValue || "";
              } else if (this.placeholder) {
                input.placeholder = this.placeholder;
                input.style.width = (0, _utils.getWidthOfInput)(input);
              }
              if (!this.config.addItems) {
                this.disable();
              }
              containerOuter.appendChild(containerInner);
              containerOuter.appendChild(dropdown);
              containerInner.appendChild(itemList);
              if (!this.isTextElement) {
                dropdown.appendChild(choiceList);
              }
              if (this.isSelectMultipleElement || this.isTextElement) {
                containerInner.appendChild(input);
              } else if (this.canSearch) {
                dropdown.insertBefore(input, dropdown.firstChild);
              }
              if (this.isSelectElement) {
                var passedGroups = Array.from(
                  this.passedElement.getElementsByTagName("OPTGROUP")
                );
                this.highlightPosition = 0;
                this.isSearching = false;
                this._setLoading(true);
                if (passedGroups && passedGroups.length) {
                  passedGroups.forEach(function (group) {
                    _this23._addGroup(group, group.id || null);
                  });
                } else {
                  var passedOptions = Array.from(this.passedElement.options);
                  var filter = this.config.sortFilter;
                  var allChoices = this.presetChoices;
                  passedOptions.forEach(function (o) {
                    allChoices.push({
                      value: o.value,
                      label: o.innerHTML,
                      selected: o.selected,
                      disabled: o.disabled || o.parentNode.disabled,
                      placeholder: o.hasAttribute("placeholder"),
                    });
                  });
                  if (this.config.shouldSort) {
                    allChoices.sort(filter);
                  }
                  var hasSelectedChoice = allChoices.some(function (choice) {
                    return choice.selected;
                  });
                  allChoices.forEach(function (choice, index) {
                    if (_this23.isSelectOneElement) {
                      var shouldPreselect =
                        hasSelectedChoice || (!hasSelectedChoice && index > 0);
                      _this23._addChoice(
                        choice.value,
                        choice.label,
                        shouldPreselect ? choice.selected : true,
                        shouldPreselect ? choice.disabled : false,
                        undefined,
                        choice.customProperties,
                        choice.placeholder
                      );
                    } else {
                      _this23._addChoice(
                        choice.value,
                        choice.label,
                        choice.selected,
                        choice.disabled,
                        undefined,
                        choice.customProperties,
                        choice.placeholder
                      );
                    }
                  });
                }
                this._setLoading(false);
              } else if (this.isTextElement) {
                this.presetItems.forEach(function (item) {
                  var itemType = (0, _utils.getType)(item);
                  if (itemType === "Object") {
                    if (!item.value) {
                      return;
                    }
                    _this23._addItem(
                      item.value,
                      item.label,
                      item.id,
                      undefined,
                      item.customProperties,
                      item.placeholder
                    );
                  } else if (itemType === "String") {
                    _this23._addItem(item);
                  }
                });
              }
            },
          },
        ]);
        return Choices;
      })();
      module.exports = Choices;
    },
    function (module, exports, __webpack_require__) {
      (function (global) {
        "use strict";
        function log() {
          console.log.apply(console, arguments);
        }
        var defaultOptions = {
          id: null,
          caseSensitive: false,
          include: [],
          shouldSort: true,
          searchFn: BitapSearcher,
          sortFn: function (a, b) {
            return a.score - b.score;
          },
          getFn: deepValue,
          keys: [],
          verbose: false,
          tokenize: false,
          matchAllTokens: false,
          tokenSeparator: / +/g,
          minMatchCharLength: 1,
          findAllMatches: false,
        };
        function Fuse(list, options) {
          var key;
          this.list = list;
          this.options = options = options || {};
          for (key in defaultOptions) {
            if (!defaultOptions.hasOwnProperty(key)) {
              continue;
            }
            if (typeof defaultOptions[key] === "boolean") {
              this.options[key] =
                key in options ? options[key] : defaultOptions[key];
            } else {
              this.options[key] = options[key] || defaultOptions[key];
            }
          }
        }
        Fuse.VERSION = "2.7.3";
        Fuse.prototype.set = function (list) {
          this.list = list;
          return list;
        };
        Fuse.prototype.search = function (pattern) {
          if (this.options.verbose) log("\nSearch term:", pattern, "\n");
          this.pattern = pattern;
          this.results = [];
          this.resultMap = {};
          this._keyMap = null;
          this._prepareSearchers();
          this._startSearch();
          this._computeScore();
          this._sort();
          var output = this._format();
          return output;
        };
        Fuse.prototype._prepareSearchers = function () {
          var options = this.options;
          var pattern = this.pattern;
          var searchFn = options.searchFn;
          var tokens = pattern.split(options.tokenSeparator);
          var i = 0;
          var len = tokens.length;
          if (this.options.tokenize) {
            this.tokenSearchers = [];
            for (; i < len; i++) {
              this.tokenSearchers.push(new searchFn(tokens[i], options));
            }
          }
          this.fullSeacher = new searchFn(pattern, options);
        };
        Fuse.prototype._startSearch = function () {
          var options = this.options;
          var getFn = options.getFn;
          var list = this.list;
          var listLen = list.length;
          var keys = this.options.keys;
          var keysLen = keys.length;
          var key;
          var weight;
          var item = null;
          var i;
          var j;
          if (typeof list[0] === "string") {
            for (i = 0; i < listLen; i++) {
              this._analyze("", list[i], i, i);
            }
          } else {
            this._keyMap = {};
            for (i = 0; i < listLen; i++) {
              item = list[i];
              for (j = 0; j < keysLen; j++) {
                key = keys[j];
                if (typeof key !== "string") {
                  weight = 1 - key.weight || 1;
                  this._keyMap[key.name] = { weight: weight };
                  if (key.weight <= 0 || key.weight > 1) {
                    throw new Error("Key weight has to be > 0 and <= 1");
                  }
                  key = key.name;
                } else {
                  this._keyMap[key] = { weight: 1 };
                }
                this._analyze(key, getFn(item, key, []), item, i);
              }
            }
          }
        };
        Fuse.prototype._analyze = function (key, text, entity, index) {
          var options = this.options;
          var words;
          var scores;
          var exists = false;
          var existingResult;
          var averageScore;
          var finalScore;
          var scoresLen;
          var mainSearchResult;
          var tokenSearcher;
          var termScores;
          var word;
          var tokenSearchResult;
          var hasMatchInText;
          var checkTextMatches;
          var i;
          var j;
          if (text === undefined || text === null) {
            return;
          }
          scores = [];
          var numTextMatches = 0;
          if (typeof text === "string") {
            words = text.split(options.tokenSeparator);
            if (options.verbose) log("---------\nKey:", key);
            if (this.options.tokenize) {
              for (i = 0; i < this.tokenSearchers.length; i++) {
                tokenSearcher = this.tokenSearchers[i];
                if (options.verbose) log("Pattern:", tokenSearcher.pattern);
                termScores = [];
                hasMatchInText = false;
                for (j = 0; j < words.length; j++) {
                  word = words[j];
                  tokenSearchResult = tokenSearcher.search(word);
                  var obj = {};
                  if (tokenSearchResult.isMatch) {
                    obj[word] = tokenSearchResult.score;
                    exists = true;
                    hasMatchInText = true;
                    scores.push(tokenSearchResult.score);
                  } else {
                    obj[word] = 1;
                    if (!this.options.matchAllTokens) {
                      scores.push(1);
                    }
                  }
                  termScores.push(obj);
                }
                if (hasMatchInText) {
                  numTextMatches++;
                }
                if (options.verbose) log("Token scores:", termScores);
              }
              averageScore = scores[0];
              scoresLen = scores.length;
              for (i = 1; i < scoresLen; i++) {
                averageScore += scores[i];
              }
              averageScore = averageScore / scoresLen;
              if (options.verbose) log("Token score average:", averageScore);
            }
            mainSearchResult = this.fullSeacher.search(text);
            if (options.verbose)
              log("Full text score:", mainSearchResult.score);
            finalScore = mainSearchResult.score;
            if (averageScore !== undefined) {
              finalScore = (finalScore + averageScore) / 2;
            }
            if (options.verbose) log("Score average:", finalScore);
            checkTextMatches =
              this.options.tokenize && this.options.matchAllTokens
                ? numTextMatches >= this.tokenSearchers.length
                : true;
            if (options.verbose) log("Check Matches", checkTextMatches);
            if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
              existingResult = this.resultMap[index];
              if (existingResult) {
                existingResult.output.push({
                  key: key,
                  score: finalScore,
                  matchedIndices: mainSearchResult.matchedIndices,
                });
              } else {
                this.resultMap[index] = {
                  item: entity,
                  output: [
                    {
                      key: key,
                      score: finalScore,
                      matchedIndices: mainSearchResult.matchedIndices,
                    },
                  ],
                };
                this.results.push(this.resultMap[index]);
              }
            }
          } else if (isArray(text)) {
            for (i = 0; i < text.length; i++) {
              this._analyze(key, text[i], entity, index);
            }
          }
        };
        Fuse.prototype._computeScore = function () {
          var i;
          var j;
          var keyMap = this._keyMap;
          var totalScore;
          var output;
          var scoreLen;
          var score;
          var weight;
          var results = this.results;
          var bestScore;
          var nScore;
          if (this.options.verbose) log("\n\nComputing score:\n");
          for (i = 0; i < results.length; i++) {
            totalScore = 0;
            output = results[i].output;
            scoreLen = output.length;
            bestScore = 1;
            for (j = 0; j < scoreLen; j++) {
              score = output[j].score;
              weight = keyMap ? keyMap[output[j].key].weight : 1;
              nScore = score * weight;
              if (weight !== 1) {
                bestScore = Math.min(bestScore, nScore);
              } else {
                totalScore += nScore;
                output[j].nScore = nScore;
              }
            }
            if (bestScore === 1) {
              results[i].score = totalScore / scoreLen;
            } else {
              results[i].score = bestScore;
            }
            if (this.options.verbose) log(results[i]);
          }
        };
        Fuse.prototype._sort = function () {
          var options = this.options;
          if (options.shouldSort) {
            if (options.verbose) log("\n\nSorting....");
            this.results.sort(options.sortFn);
          }
        };
        Fuse.prototype._format = function () {
          var options = this.options;
          var getFn = options.getFn;
          var finalOutput = [];
          var i;
          var len;
          var results = this.results;
          var replaceValue;
          var getItemAtIndex;
          var include = options.include;
          if (options.verbose) log("\n\nOutput:\n\n", results);
          replaceValue = options.id
            ? function (index) {
                results[index].item = getFn(
                  results[index].item,
                  options.id,
                  []
                )[0];
              }
            : function () {};
          getItemAtIndex = function (index) {
            var record = results[index];
            var data;
            var j;
            var output;
            var _item;
            var _result;
            if (include.length > 0) {
              data = { item: record.item };
              if (include.indexOf("matches") !== -1) {
                output = record.output;
                data.matches = [];
                for (j = 0; j < output.length; j++) {
                  _item = output[j];
                  _result = { indices: _item.matchedIndices };
                  if (_item.key) {
                    _result.key = _item.key;
                  }
                  data.matches.push(_result);
                }
              }
              if (include.indexOf("score") !== -1) {
                data.score = results[index].score;
              }
            } else {
              data = record.item;
            }
            return data;
          };
          for (i = 0, len = results.length; i < len; i++) {
            replaceValue(i);
            finalOutput.push(getItemAtIndex(i));
          }
          return finalOutput;
        };
        function deepValue(obj, path, list) {
          var firstSegment;
          var remaining;
          var dotIndex;
          var value;
          var i;
          var len;
          if (!path) {
            list.push(obj);
          } else {
            dotIndex = path.indexOf(".");
            if (dotIndex !== -1) {
              firstSegment = path.slice(0, dotIndex);
              remaining = path.slice(dotIndex + 1);
            } else {
              firstSegment = path;
            }
            value = obj[firstSegment];
            if (value !== null && value !== undefined) {
              if (
                !remaining &&
                (typeof value === "string" || typeof value === "number")
              ) {
                list.push(value);
              } else if (isArray(value)) {
                for (i = 0, len = value.length; i < len; i++) {
                  deepValue(value[i], remaining, list);
                }
              } else if (remaining) {
                deepValue(value, remaining, list);
              }
            }
          }
          return list;
        }
        function isArray(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        }
        function BitapSearcher(pattern, options) {
          options = options || {};
          this.options = options;
          this.options.location =
            options.location || BitapSearcher.defaultOptions.location;
          this.options.distance =
            "distance" in options
              ? options.distance
              : BitapSearcher.defaultOptions.distance;
          this.options.threshold =
            "threshold" in options
              ? options.threshold
              : BitapSearcher.defaultOptions.threshold;
          this.options.maxPatternLength =
            options.maxPatternLength ||
            BitapSearcher.defaultOptions.maxPatternLength;
          this.pattern = options.caseSensitive
            ? pattern
            : pattern.toLowerCase();
          this.patternLen = pattern.length;
          if (this.patternLen <= this.options.maxPatternLength) {
            this.matchmask = 1 << (this.patternLen - 1);
            this.patternAlphabet = this._calculatePatternAlphabet();
          }
        }
        BitapSearcher.defaultOptions = {
          location: 0,
          distance: 100,
          threshold: 0.6,
          maxPatternLength: 32,
        };
        BitapSearcher.prototype._calculatePatternAlphabet = function () {
          var mask = {},
            i = 0;
          for (i = 0; i < this.patternLen; i++) {
            mask[this.pattern.charAt(i)] = 0;
          }
          for (i = 0; i < this.patternLen; i++) {
            mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1);
          }
          return mask;
        };
        BitapSearcher.prototype._bitapScore = function (errors, location) {
          var accuracy = errors / this.patternLen,
            proximity = Math.abs(this.options.location - location);
          if (!this.options.distance) {
            return proximity ? 1.0 : accuracy;
          }
          return accuracy + proximity / this.options.distance;
        };
        BitapSearcher.prototype.search = function (text) {
          var options = this.options;
          var i;
          var j;
          var textLen;
          var findAllMatches;
          var location;
          var threshold;
          var bestLoc;
          var binMin;
          var binMid;
          var binMax;
          var start, finish;
          var bitArr;
          var lastBitArr;
          var charMatch;
          var score;
          var locations;
          var matches;
          var isMatched;
          var matchMask;
          var matchedIndices;
          var matchesLen;
          var match;
          text = options.caseSensitive ? text : text.toLowerCase();
          if (this.pattern === text) {
            return {
              isMatch: true,
              score: 0,
              matchedIndices: [[0, text.length - 1]],
            };
          }
          if (this.patternLen > options.maxPatternLength) {
            matches = text.match(
              new RegExp(this.pattern.replace(options.tokenSeparator, "|"))
            );
            isMatched = !!matches;
            if (isMatched) {
              matchedIndices = [];
              for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
                match = matches[i];
                matchedIndices.push([text.indexOf(match), match.length - 1]);
              }
            }
            return {
              isMatch: isMatched,
              score: isMatched ? 0.5 : 1,
              matchedIndices: matchedIndices,
            };
          }
          findAllMatches = options.findAllMatches;
          location = options.location;
          textLen = text.length;
          threshold = options.threshold;
          bestLoc = text.indexOf(this.pattern, location);
          matchMask = [];
          for (i = 0; i < textLen; i++) {
            matchMask[i] = 0;
          }
          if (bestLoc != -1) {
            threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
            bestLoc = text.lastIndexOf(
              this.pattern,
              location + this.patternLen
            );
            if (bestLoc != -1) {
              threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
            }
          }
          bestLoc = -1;
          score = 1;
          locations = [];
          binMax = this.patternLen + textLen;
          for (i = 0; i < this.patternLen; i++) {
            binMin = 0;
            binMid = binMax;
            while (binMin < binMid) {
              if (this._bitapScore(i, location + binMid) <= threshold) {
                binMin = binMid;
              } else {
                binMax = binMid;
              }
              binMid = Math.floor((binMax - binMin) / 2 + binMin);
            }
            binMax = binMid;
            start = Math.max(1, location - binMid + 1);
            if (findAllMatches) {
              finish = textLen;
            } else {
              finish = Math.min(location + binMid, textLen) + this.patternLen;
            }
            bitArr = Array(finish + 2);
            bitArr[finish + 1] = (1 << i) - 1;
            for (j = finish; j >= start; j--) {
              charMatch = this.patternAlphabet[text.charAt(j - 1)];
              if (charMatch) {
                matchMask[j - 1] = 1;
              }
              bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;
              if (i !== 0) {
                bitArr[j] |=
                  ((lastBitArr[j + 1] | lastBitArr[j]) << 1) |
                  1 |
                  lastBitArr[j + 1];
              }
              if (bitArr[j] & this.matchmask) {
                score = this._bitapScore(i, j - 1);
                if (score <= threshold) {
                  threshold = score;
                  bestLoc = j - 1;
                  locations.push(bestLoc);
                  if (bestLoc <= location) {
                    break;
                  }
                  start = Math.max(1, 2 * location - bestLoc);
                }
              }
            }
            if (this._bitapScore(i + 1, location) > threshold) {
              break;
            }
            lastBitArr = bitArr;
          }
          matchedIndices = this._getMatchedIndices(matchMask);
          return {
            isMatch: bestLoc >= 0,
            score: score === 0 ? 0.001 : score,
            matchedIndices: matchedIndices,
          };
        };
        BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
          var matchedIndices = [];
          var start = -1;
          var end = -1;
          var i = 0;
          var match;
          var len = matchMask.length;
          for (; i < len; i++) {
            match = matchMask[i];
            if (match && start === -1) {
              start = i;
            } else if (!match && start !== -1) {
              end = i - 1;
              if (end - start + 1 >= this.options.minMatchCharLength) {
                matchedIndices.push([start, end]);
              }
              start = -1;
            }
          }
          if (matchMask[i - 1]) {
            if (i - 1 - start + 1 >= this.options.minMatchCharLength) {
              matchedIndices.push([start, i - 1]);
            }
          }
          return matchedIndices;
        };
        if (true) {
          module.exports = Fuse;
        } else if (typeof define === "function" && define.amd) {
          define(function () {
            return Fuse;
          });
        } else {
          global.Fuse = Fuse;
        }
      })(this);
    },
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/ (function () {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = [];
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              classes.push(classNames.apply(null, arg));
            } else if (argType === "object") {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          module.exports = classNames;
        } else if (true) {
          !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
          (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return classNames;
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          window.classNames = classNames;
        }
      })();
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _createClass = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      var _redux = __webpack_require__(5);
      var _index = __webpack_require__(26);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Store = (function () {
        function Store() {
          _classCallCheck(this, Store);
          this.store = (0, _redux.createStore)(
            _index2.default,
            window.devToolsExtension ? window.devToolsExtension() : undefined
          );
        }
        _createClass(Store, [
          {
            key: "getState",
            value: function getState() {
              return this.store.getState();
            },
          },
          {
            key: "dispatch",
            value: function dispatch(action) {
              this.store.dispatch(action);
            },
          },
          {
            key: "subscribe",
            value: function subscribe(onChange) {
              this.store.subscribe(onChange);
            },
          },
          {
            key: "isLoading",
            value: function isLoading() {
              var state = this.store.getState();
              return state.general.loading;
            },
          },
          {
            key: "getItems",
            value: function getItems() {
              var state = this.store.getState();
              return state.items;
            },
          },
          {
            key: "getItemsFilteredByActive",
            value: function getItemsFilteredByActive() {
              var items = this.getItems();
              var values = items.filter(function (item) {
                return item.active === true;
              }, []);
              return values;
            },
          },
          {
            key: "getItemsReducedToValues",
            value: function getItemsReducedToValues() {
              var items =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : this.getItems();
              var values = items.reduce(function (prev, current) {
                prev.push(current.value);
                return prev;
              }, []);
              return values;
            },
          },
          {
            key: "getChoices",
            value: function getChoices() {
              var state = this.store.getState();
              return state.choices;
            },
          },
          {
            key: "getChoicesFilteredByActive",
            value: function getChoicesFilteredByActive() {
              var choices = this.getChoices();
              var values = choices.filter(function (choice) {
                return choice.active === true;
              });
              return values;
            },
          },
          {
            key: "getChoicesFilteredBySelectable",
            value: function getChoicesFilteredBySelectable() {
              var choices = this.getChoices();
              var values = choices.filter(function (choice) {
                return choice.disabled !== true;
              });
              return values;
            },
          },
          {
            key: "getSearchableChoices",
            value: function getSearchableChoices() {
              var filtered = this.getChoicesFilteredBySelectable();
              return filtered.filter(function (choice) {
                return choice.placeholder !== true;
              });
            },
          },
          {
            key: "getChoiceById",
            value: function getChoiceById(id) {
              if (id) {
                var choices = this.getChoicesFilteredByActive();
                var foundChoice = choices.find(function (choice) {
                  return choice.id === parseInt(id, 10);
                });
                return foundChoice;
              }
              return false;
            },
          },
          {
            key: "getGroups",
            value: function getGroups() {
              var state = this.store.getState();
              return state.groups;
            },
          },
          {
            key: "getGroupsFilteredByActive",
            value: function getGroupsFilteredByActive() {
              var groups = this.getGroups();
              var choices = this.getChoices();
              var values = groups.filter(function (group) {
                var isActive =
                  group.active === true && group.disabled === false;
                var hasActiveOptions = choices.some(function (choice) {
                  return choice.active === true && choice.disabled === false;
                });
                return isActive && hasActiveOptions;
              }, []);
              return values;
            },
          },
          {
            key: "getGroupById",
            value: function getGroupById(id) {
              var groups = this.getGroups();
              var foundGroup = groups.find(function (group) {
                return group.id === id;
              });
              return foundGroup;
            },
          },
          {
            key: "getPlaceholderChoice",
            value: function getPlaceholderChoice() {
              var choices = this.getChoices();
              var placeholderChoice = []
                .concat(_toConsumableArray(choices))
                .reverse()
                .find(function (choice) {
                  return choice.placeholder === true;
                });
              return placeholderChoice;
            },
          },
        ]);
        return Store;
      })();
      exports.default = Store;
      module.exports = Store;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports.compose =
        exports.applyMiddleware =
        exports.bindActionCreators =
        exports.combineReducers =
        exports.createStore =
          undefined;
      var _createStore = __webpack_require__(6);
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = __webpack_require__(21);
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = __webpack_require__(23);
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = __webpack_require__(24);
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = __webpack_require__(25);
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = __webpack_require__(22);
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isCrushed() {}
      if (false) {
        (0, _warning2["default"])(
          "You are currently using minified code outside of NODE_ENV === 'production'. " +
            "This means that you are running a slower development build of Redux. " +
            "You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify " +
            "or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) " +
            "to ensure you have the correct code for your production build."
        );
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = undefined;
      exports["default"] = createStore;
      var _isPlainObject = __webpack_require__(7);
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = __webpack_require__(17);
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ActionTypes = (exports.ActionTypes = { INIT: "@@redux/INIT" });
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (
          typeof preloadedState === "function" &&
          typeof enhancer === "undefined"
        ) {
          enhancer = preloadedState;
          preloadedState = undefined;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error(
              "Actions must be plain objects. " +
                "Use custom middleware for async actions."
            );
          }
          if (typeof action.type === "undefined") {
            throw new Error(
              'Actions may not have an undefined "type" property. ' +
                "Have you misspelled a constant?"
            );
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = (currentListeners = nextListeners);
          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return (
            (_ref = {
              subscribe: function subscribe(observer) {
                if (typeof observer !== "object") {
                  throw new TypeError("Expected the observer to be an object.");
                }
                function observeState() {
                  if (observer.next) {
                    observer.next(getState());
                  }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return { unsubscribe: unsubscribe };
              },
            }),
            (_ref[_symbolObservable2["default"]] = function () {
              return this;
            }),
            _ref
          );
        }
        dispatch({ type: ActionTypes.INIT });
        return (
          (_ref2 = {
            dispatch: dispatch,
            subscribe: subscribe,
            getState: getState,
            replaceReducer: replaceReducer,
          }),
          (_ref2[_symbolObservable2["default"]] = observable),
          _ref2
        );
      }
    },
    function (module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(8),
        getPrototype = __webpack_require__(14),
        isObjectLike = __webpack_require__(16);
      var objectTag = "[object Object]";
      var funcProto = Function.prototype,
        objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor =
          hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return (
          typeof Ctor == "function" &&
          Ctor instanceof Ctor &&
          funcToString.call(Ctor) == objectCtorString
        );
      }
      module.exports = isPlainObject;
    },
    function (module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(9),
        getRawTag = __webpack_require__(12),
        objectToString = __webpack_require__(13);
      var nullTag = "[object Null]",
        undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value)
          ? getRawTag(value)
          : objectToString(value);
      }
      module.exports = baseGetTag;
    },
    function (module, exports, __webpack_require__) {
      var root = __webpack_require__(10);
      var Symbol = root.Symbol;
      module.exports = Symbol;
    },
    function (module, exports, __webpack_require__) {
      var freeGlobal = __webpack_require__(11);
      var freeSelf =
        typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    },
    function (module, exports) {
      (function (global) {
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global.Object === Object &&
          global;
        module.exports = freeGlobal;
      }.call(
        exports,
        (function () {
          return this;
        })()
      ));
    },
    function (module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(9);
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    },
    function (module, exports) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    },
    function (module, exports, __webpack_require__) {
      var overArg = __webpack_require__(15);
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    },
    function (module, exports) {
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    },
    function (module, exports) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    },
    function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(18);
    },
    function (module, exports, __webpack_require__) {
      (function (global, module) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var _ponyfill = __webpack_require__(20);
        var _ponyfill2 = _interopRequireDefault(_ponyfill);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var root;
        if (typeof self !== "undefined") {
          root = self;
        } else if (typeof window !== "undefined") {
          root = window;
        } else if (typeof global !== "undefined") {
          root = global;
        } else if (true) {
          root = module;
        } else {
          root = Function("return this")();
        }
        var result = (0, _ponyfill2["default"])(root);
        exports["default"] = result;
      }.call(
        exports,
        (function () {
          return this;
        })(),
        __webpack_require__(19)(module)
      ));
    },
    function (module, exports) {
      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          module.children = [];
          module.webpackPolyfill = 1;
        }
        return module;
      };
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers;
      var _createStore = __webpack_require__(6);
      var _isPlainObject = __webpack_require__(7);
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = __webpack_require__(22);
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName =
          (actionType && '"' + actionType.toString() + '"') || "an action";
        return (
          "Given action " +
          actionName +
          ', reducer "' +
          key +
          '" returned undefined. ' +
          "To ignore an action, you must explicitly return the previous state. " +
          "If you want this reducer to hold no value, you can return null instead of undefined."
        );
      }
      function getUnexpectedStateShapeWarningMessage(
        inputState,
        reducers,
        action,
        unexpectedKeyCache
      ) {
        var reducerKeys = Object.keys(reducers);
        var argumentName =
          action && action.type === _createStore.ActionTypes.INIT
            ? "preloadedState argument passed to createStore"
            : "previous state received by the reducer";
        if (reducerKeys.length === 0) {
          return (
            "Store does not have a valid reducer. Make sure the argument passed " +
            "to combineReducers is an object whose values are reducers."
          );
        }
        if (!(0, _isPlainObject2["default"])(inputState)) {
          return (
            "The " +
            argumentName +
            ' has unexpected type of "' +
            {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] +
            '". Expected argument to be an object with the following ' +
            ('keys: "' + reducerKeys.join('", "') + '"')
          );
        }
        var unexpectedKeys = Object.keys(inputState).filter(function (key) {
          return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
        });
        unexpectedKeys.forEach(function (key) {
          unexpectedKeyCache[key] = true;
        });
        if (unexpectedKeys.length > 0) {
          return (
            "Unexpected " +
            (unexpectedKeys.length > 1 ? "keys" : "key") +
            " " +
            ('"' +
              unexpectedKeys.join('", "') +
              '" found in ' +
              argumentName +
              ". ") +
            "Expected to find one of the known reducer keys instead: " +
            ('"' +
              reducerKeys.join('", "') +
              '". Unexpected keys will be ignored.')
          );
        }
      }
      function assertReducerShape(reducers) {
        Object.keys(reducers).forEach(function (key) {
          var reducer = reducers[key];
          var initialState = reducer(undefined, {
            type: _createStore.ActionTypes.INIT,
          });
          if (typeof initialState === "undefined") {
            throw new Error(
              'Reducer "' +
                key +
                '" returned undefined during initialization. ' +
                "If the state passed to the reducer is undefined, you must " +
                "explicitly return the initial state. The initial state may " +
                "not be undefined. If you don't want to set a value for this reducer, " +
                "you can use null instead of undefined."
            );
          }
          var type =
            "@@redux/PROBE_UNKNOWN_ACTION_" +
            Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(undefined, { type: type }) === "undefined") {
            throw new Error(
              'Reducer "' +
                key +
                '" returned undefined when probed with a random type. ' +
                ("Don't try to handle " +
                  _createStore.ActionTypes.INIT +
                  ' or other actions in "redux/*" ') +
                "namespace. They are considered private. Instead, you must return the " +
                "current state for any unknown actions, unless it is undefined, " +
                "in which case you must return the initial state, regardless of the " +
                "action type. The initial state may not be undefined, but can be null."
            );
          }
        });
      }
      function combineReducers(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])(
                'No reducer provided for key "' + key + '"'
              );
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        var unexpectedKeyCache = void 0;
        if (false) {
          unexpectedKeyCache = {};
        }
        var shapeAssertionError = void 0;
        try {
          assertReducerShape(finalReducers);
        } catch (e) {
          shapeAssertionError = e;
        }
        return function combination() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          var action = arguments[1];
          if (shapeAssertionError) {
            throw shapeAssertionError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(
              state,
              finalReducers,
              action,
              unexpectedKeyCache
            );
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var _i = 0; _i < finalReducerKeys.length; _i++) {
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(_key, action);
              throw new Error(errorMessage);
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    },
    function (module, exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (
          typeof console !== "undefined" &&
          typeof console.error === "function"
        ) {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {}
      }
    },
    function (module, exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function () {
          return dispatch(actionCreator.apply(undefined, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error(
            "bindActionCreators expected an object or a function, instead received " +
              (actionCreators === null ? "null" : typeof actionCreators) +
              ". " +
              'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
          );
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(
              actionCreator,
              dispatch
            );
          }
        }
        return boundActionCreators;
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
      exports["default"] = applyMiddleware;
      var _compose = __webpack_require__(25);
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function applyMiddleware() {
        for (
          var _len = arguments.length, middlewares = Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          middlewares[_key] = arguments[_key];
        }
        return function (createStore) {
          return function (reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              },
            };
            chain = middlewares.map(function (middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(
              undefined,
              chain
            )(store.dispatch);
            return _extends({}, store, { dispatch: _dispatch });
          };
        };
      }
    },
    function (module, exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose;
      function compose() {
        for (
          var _len = arguments.length, funcs = Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function (arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        return funcs.reduce(function (a, b) {
          return function () {
            return a(b.apply(undefined, arguments));
          };
        });
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _redux = __webpack_require__(5);
      var _items = __webpack_require__(27);
      var _items2 = _interopRequireDefault(_items);
      var _groups = __webpack_require__(28);
      var _groups2 = _interopRequireDefault(_groups);
      var _choices = __webpack_require__(29);
      var _choices2 = _interopRequireDefault(_choices);
      var _general = __webpack_require__(30);
      var _general2 = _interopRequireDefault(_general);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var appReducer = (0, _redux.combineReducers)({
        items: _items2.default,
        groups: _groups2.default,
        choices: _choices2.default,
        general: _general2.default,
      });
      var rootReducer = function rootReducer(passedState, action) {
        var state = passedState;
        if (action.type === "CLEAR_ALL") {
          state = undefined;
        }
        return appReducer(state, action);
      };
      exports.default = rootReducer;
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      var items = function items() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var action = arguments[1];
        switch (action.type) {
          case "ADD_ITEM": {
            var newState = [].concat(_toConsumableArray(state), [
              {
                id: action.id,
                choiceId: action.choiceId,
                groupId: action.groupId,
                value: action.value,
                label: action.label,
                active: true,
                highlighted: false,
                customProperties: action.customProperties,
                placeholder: action.placeholder || false,
                keyCode: null,
              },
            ]);
            return newState.map(function (item) {
              if (item.highlighted) {
                item.highlighted = false;
              }
              return item;
            });
          }
          case "REMOVE_ITEM": {
            return state.map(function (item) {
              if (item.id === action.id) {
                item.active = false;
              }
              return item;
            });
          }
          case "HIGHLIGHT_ITEM": {
            return state.map(function (item) {
              if (item.id === action.id) {
                item.highlighted = action.highlighted;
              }
              return item;
            });
          }
          default: {
            return state;
          }
        }
      };
      exports.default = items;
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      var groups = function groups() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var action = arguments[1];
        switch (action.type) {
          case "ADD_GROUP": {
            return [].concat(_toConsumableArray(state), [
              {
                id: action.id,
                value: action.value,
                active: action.active,
                disabled: action.disabled,
              },
            ]);
          }
          case "CLEAR_CHOICES": {
            return (state.groups = []);
          }
          default: {
            return state;
          }
        }
      };
      exports.default = groups;
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      var choices = function choices() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var action = arguments[1];
        switch (action.type) {
          case "ADD_CHOICE": {
            return [].concat(_toConsumableArray(state), [
              {
                id: action.id,
                elementId: action.elementId,
                groupId: action.groupId,
                value: action.value,
                label: action.label || action.value,
                disabled: action.disabled || false,
                selected: false,
                active: true,
                score: 9999,
                customProperties: action.customProperties,
                placeholder: action.placeholder || false,
                keyCode: null,
              },
            ]);
          }
          case "ADD_ITEM": {
            var newState = state;
            if (action.activateOptions) {
              newState = state.map(function (choice) {
                choice.active = action.active;
                return choice;
              });
            }
            if (action.choiceId > -1) {
              newState = state.map(function (choice) {
                if (choice.id === parseInt(action.choiceId, 10)) {
                  choice.selected = true;
                }
                return choice;
              });
            }
            return newState;
          }
          case "REMOVE_ITEM": {
            if (action.choiceId > -1) {
              return state.map(function (choice) {
                if (choice.id === parseInt(action.choiceId, 10)) {
                  choice.selected = false;
                }
                return choice;
              });
            }
            return state;
          }
          case "FILTER_CHOICES": {
            var filteredResults = action.results;
            var filteredState = state.map(function (choice) {
              choice.active = filteredResults.some(function (result) {
                if (result.item.id === choice.id) {
                  choice.score = result.score;
                  return true;
                }
                return false;
              });
              return choice;
            });
            return filteredState;
          }
          case "ACTIVATE_CHOICES": {
            return state.map(function (choice) {
              choice.active = action.active;
              return choice;
            });
          }
          case "CLEAR_CHOICES": {
            return (state.choices = []);
          }
          default: {
            return state;
          }
        }
      };
      exports.default = choices;
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var general = function general() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : { loading: false };
        var action = arguments[1];
        switch (action.type) {
          case "LOADING": {
            return { loading: action.isLoading };
          }
          default: {
            return state;
          }
        }
      };
      exports.default = general;
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var addItem = (exports.addItem = function addItem(
        value,
        label,
        id,
        choiceId,
        groupId,
        customProperties,
        placeholder,
        keyCode
      ) {
        return {
          type: "ADD_ITEM",
          value: value,
          label: label,
          id: id,
          choiceId: choiceId,
          groupId: groupId,
          customProperties: customProperties,
          placeholder: placeholder,
          keyCode: keyCode,
        };
      });
      var removeItem = (exports.removeItem = function removeItem(id, choiceId) {
        return { type: "REMOVE_ITEM", id: id, choiceId: choiceId };
      });
      var highlightItem = (exports.highlightItem = function highlightItem(
        id,
        highlighted
      ) {
        return { type: "HIGHLIGHT_ITEM", id: id, highlighted: highlighted };
      });
      var addChoice = (exports.addChoice = function addChoice(
        value,
        label,
        id,
        groupId,
        disabled,
        elementId,
        customProperties,
        placeholder,
        keyCode
      ) {
        return {
          type: "ADD_CHOICE",
          value: value,
          label: label,
          id: id,
          groupId: groupId,
          disabled: disabled,
          elementId: elementId,
          customProperties: customProperties,
          placeholder: placeholder,
          keyCode: keyCode,
        };
      });
      var filterChoices = (exports.filterChoices = function filterChoices(
        results
      ) {
        return { type: "FILTER_CHOICES", results: results };
      });
      var activateChoices = (exports.activateChoices =
        function activateChoices() {
          var active =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          return { type: "ACTIVATE_CHOICES", active: active };
        });
      var clearChoices = (exports.clearChoices = function clearChoices() {
        return { type: "CLEAR_CHOICES" };
      });
      var addGroup = (exports.addGroup = function addGroup(
        value,
        id,
        active,
        disabled
      ) {
        return {
          type: "ADD_GROUP",
          value: value,
          id: id,
          active: active,
          disabled: disabled,
        };
      });
      var clearAll = (exports.clearAll = function clearAll() {
        return { type: "CLEAR_ALL" };
      });
      var setIsLoading = (exports.setIsLoading = function setIsLoading(
        isLoading
      ) {
        return { type: "LOADING", isLoading: isLoading };
      });
    },
    function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _typeof =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
      var capitalise = (exports.capitalise = function capitalise(str) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      });
      var generateChars = (exports.generateChars = function generateChars(
        length
      ) {
        var chars = "";
        for (var i = 0; i < length; i++) {
          var randomChar = getRandomNumber(0, 36);
          chars += randomChar.toString(36);
        }
        return chars;
      });
      var generateId = (exports.generateId = function generateId(
        element,
        prefix
      ) {
        var id =
          element.id ||
          (element.name && element.name + "-" + generateChars(2)) ||
          generateChars(4);
        id = id.replace(/(:|\.|\[|\]|,)/g, "");
        id = prefix + id;
        return id;
      });
      var getType = (exports.getType = function getType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
      });
      var isType = (exports.isType = function isType(type, obj) {
        var clas = getType(obj);
        return obj !== undefined && obj !== null && clas === type;
      });
      var isNode = (exports.isNode = function isNode(o) {
        return (typeof Node === "undefined" ? "undefined" : _typeof(Node)) ===
          "object"
          ? o instanceof Node
          : o &&
              (typeof o === "undefined" ? "undefined" : _typeof(o)) ===
                "object" &&
              typeof o.nodeType === "number" &&
              typeof o.nodeName === "string";
      });
      var isElement = (exports.isElement = function isElement(o) {
        return (typeof HTMLElement === "undefined"
          ? "undefined"
          : _typeof(HTMLElement)) === "object"
          ? o instanceof HTMLElement
          : o &&
              (typeof o === "undefined" ? "undefined" : _typeof(o)) ===
                "object" &&
              o !== null &&
              o.nodeType === 1 &&
              typeof o.nodeName === "string";
      });
      var extend = (exports.extend = function extend() {
        var extended = {};
        var length = arguments.length;
        var merge = function merge(obj) {
          for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
              if (isType("Object", obj[prop])) {
                extended[prop] = extend(true, extended[prop], obj[prop]);
              } else {
                extended[prop] = obj[prop];
              }
            }
          }
        };
        for (var i = 0; i < length; i++) {
          var obj = arguments[i];
          if (isType("Object", obj)) {
            merge(obj);
          }
        }
        return extended;
      });
      var whichTransitionEvent = (exports.whichTransitionEvent =
        function whichTransitionEvent() {
          var t,
            el = document.createElement("fakeelement");
          var transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
          for (t in transitions) {
            if (el.style[t] !== undefined) {
              return transitions[t];
            }
          }
        });
      var whichAnimationEvent = (exports.whichAnimationEvent =
        function whichAnimationEvent() {
          var t,
            el = document.createElement("fakeelement");
          var animations = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
          };
          for (t in animations) {
            if (el.style[t] !== undefined) {
              return animations[t];
            }
          }
        });
      var getParentsUntil = (exports.getParentsUntil = function getParentsUntil(
        elem,
        parent,
        selector
      ) {
        var parents = [];
        for (; elem && elem !== document; elem = elem.parentNode) {
          if (parent) {
            var parentType = parent.charAt(0);
            if (parentType === ".") {
              if (elem.classList.contains(parent.substr(1))) {
                break;
              }
            }
            if (parentType === "#") {
              if (elem.id === parent.substr(1)) {
                break;
              }
            }
            if (parentType === "[") {
              if (elem.hasAttribute(parent.substr(1, parent.length - 1))) {
                break;
              }
            }
            if (elem.tagName.toLowerCase() === parent) {
              break;
            }
          }
          if (selector) {
            var selectorType = selector.charAt(0);
            if (selectorType === ".") {
              if (elem.classList.contains(selector.substr(1))) {
                parents.push(elem);
              }
            }
            if (selectorType === "#") {
              if (elem.id === selector.substr(1)) {
                parents.push(elem);
              }
            }
            if (selectorType === "[") {
              if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
                parents.push(elem);
              }
            }
            if (elem.tagName.toLowerCase() === selector) {
              parents.push(elem);
            }
          } else {
            parents.push(elem);
          }
        }
        if (parents.length === 0) {
          return null;
        } else {
          return parents;
        }
      });
      var wrap = (exports.wrap = function wrap(element, wrapper) {
        wrapper = wrapper || document.createElement("div");
        if (element.nextSibling) {
          element.parentNode.insertBefore(wrapper, element.nextSibling);
        } else {
          element.parentNode.appendChild(wrapper);
        }
        return wrapper.appendChild(element);
      });
      var getSiblings = (exports.getSiblings = function getSiblings(elem) {
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
        for (; sibling; sibling = sibling.nextSibling) {
          if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
          }
        }
        return siblings;
      });
      var findAncestor = (exports.findAncestor = function findAncestor(
        el,
        cls
      ) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {}
        return el;
      });
      var findAncestorByAttrName = (exports.findAncestorByAttrName =
        function findAncestorByAttrName(el, attr) {
          var target = el;
          while (target) {
            if (target.hasAttribute(attr)) {
              return target;
            }
            target = target.parentElement;
          }
          return null;
        });
      var debounce = (exports.debounce = function debounce(
        func,
        wait,
        immediate
      ) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      });
      var getElemDistance = (exports.getElemDistance = function getElemDistance(
        el
      ) {
        var location = 0;
        if (el.offsetParent) {
          do {
            location += el.offsetTop;
            el = el.offsetParent;
          } while (el);
        }
        return location >= 0 ? location : 0;
      });
      var getElementOffset = (exports.getElementOffset =
        function getElementOffset(el, offset) {
          var elOffset = offset;
          if (elOffset > 1) elOffset = 1;
          if (elOffset > 0) elOffset = 0;
          return Math.max(el.offsetHeight * elOffset);
        });
      var getAdjacentEl = (exports.getAdjacentEl = function getAdjacentEl(
        startEl,
        className
      ) {
        var direction =
          arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        if (!startEl || !className) return;
        var parent = startEl.parentNode.parentNode;
        var children = Array.from(parent.querySelectorAll(className));
        var startPos = children.indexOf(startEl);
        var operatorDirection = direction > 0 ? 1 : -1;
        return children[startPos + operatorDirection];
      });
      var getScrollPosition = (exports.getScrollPosition =
        function getScrollPosition(position) {
          if (position === "bottom") {
            return Math.max(
              (window.scrollY || window.pageYOffset) +
                (window.innerHeight || document.documentElement.clientHeight)
            );
          } else {
            return window.scrollY || window.pageYOffset;
          }
        });
      var isInView = (exports.isInView = function isInView(
        el,
        position,
        offset
      ) {
        return this.getScrollPosition(position) >
          this.getElemDistance(el) + this.getElementOffset(el, offset)
          ? true
          : false;
      });
      var isScrolledIntoView = (exports.isScrolledIntoView =
        function isScrolledIntoView(el, parent) {
          var direction =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 1;
          if (!el) return;
          var isVisible = void 0;
          if (direction > 0) {
            isVisible =
              parent.scrollTop + parent.offsetHeight >=
              el.offsetTop + el.offsetHeight;
          } else {
            isVisible = el.offsetTop >= parent.scrollTop;
          }
          return isVisible;
        });
      var stripHTML = (exports.stripHTML = function stripHTML(html) {
        return html
          .replace(/&/g, "&amp;")
          .replace(/>/g, "&rt;")
          .replace(/</g, "&lt;")
          .replace(/"/g, "&quot;");
      });
      var addAnimation = (exports.addAnimation = function addAnimation(
        el,
        animation
      ) {
        var animationEvent = whichAnimationEvent();
        var removeAnimation = function removeAnimation() {
          el.classList.remove(animation);
          el.removeEventListener(animationEvent, removeAnimation, false);
        };
        el.classList.add(animation);
        el.addEventListener(animationEvent, removeAnimation, false);
      });
      var getRandomNumber = (exports.getRandomNumber = function getRandomNumber(
        min,
        max
      ) {
        return Math.floor(Math.random() * (max - min) + min);
      });
      var strToEl = (exports.strToEl = (function () {
        var tmpEl = document.createElement("div");
        return function (str) {
          var cleanedInput = str.trim();
          var r = void 0;
          tmpEl.innerHTML = cleanedInput;
          r = tmpEl.children[0];
          while (tmpEl.firstChild) {
            tmpEl.removeChild(tmpEl.firstChild);
          }
          return r;
        };
      })());
      var getWidthOfInput = (exports.getWidthOfInput = function getWidthOfInput(
        input
      ) {
        var value = input.value || input.placeholder;
        var width = input.offsetWidth;
        if (value) {
          var testEl = strToEl("<span>" + stripHTML(value) + "</span>");
          testEl.style.position = "absolute";
          testEl.style.padding = "0";
          testEl.style.top = "-9999px";
          testEl.style.left = "-9999px";
          testEl.style.width = "auto";
          testEl.style.whiteSpace = "pre";
          if (document.body.contains(input) && window.getComputedStyle) {
            var inputStyle = window.getComputedStyle(input);
            if (inputStyle) {
              testEl.style.fontSize = inputStyle.fontSize;
              testEl.style.fontFamily = inputStyle.fontFamily;
              testEl.style.fontWeight = inputStyle.fontWeight;
              testEl.style.fontStyle = inputStyle.fontStyle;
              testEl.style.letterSpacing = inputStyle.letterSpacing;
              testEl.style.textTransform = inputStyle.textTransform;
              testEl.style.padding = inputStyle.padding;
            }
          }
          document.body.appendChild(testEl);
          if (value && testEl.offsetWidth !== input.offsetWidth) {
            width = testEl.offsetWidth + 4;
          }
          document.body.removeChild(testEl);
        }
        return width + "px";
      });
      var sortByAlpha = (exports.sortByAlpha = function sortByAlpha(a, b) {
        var labelA = (a.label || a.value).toLowerCase();
        var labelB = (b.label || b.value).toLowerCase();
        if (labelA < labelB) return -1;
        if (labelA > labelB) return 1;
        return 0;
      });
      var sortByScore = (exports.sortByScore = function sortByScore(a, b) {
        return a.score - b.score;
      });
      var triggerEvent = (exports.triggerEvent = function triggerEvent(
        element,
        type
      ) {
        var customArgs =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : null;
        var event = new CustomEvent(type, {
          detail: customArgs,
          bubbles: true,
          cancelable: true,
        });
        return element.dispatchEvent(event);
      });
    },
    function (module, exports) {
      "use strict";
      (function () {
        if (!Array.from) {
          Array.from = (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function isCallable(fn) {
              return (
                typeof fn === "function" ||
                toStr.call(fn) === "[object Function]"
              );
            };
            var toInteger = function toInteger(value) {
              var number = Number(value);
              if (isNaN(number)) {
                return 0;
              }
              if (number === 0 || !isFinite(number)) {
                return number;
              }
              return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function toLength(value) {
              var len = toInteger(value);
              return Math.min(Math.max(len, 0), maxSafeInteger);
            };
            return function from(arrayLike) {
              var C = this;
              var items = Object(arrayLike);
              if (arrayLike == null) {
                throw new TypeError(
                  "Array.from requires an array-like object - not null or undefined"
                );
              }
              var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
              var T;
              if (typeof mapFn !== "undefined") {
                if (!isCallable(mapFn)) {
                  throw new TypeError(
                    "Array.from: when provided, the second argument must be a function"
                  );
                }
                if (arguments.length > 2) {
                  T = arguments[2];
                }
              }
              var len = toLength(items.length);
              var A = isCallable(C) ? Object(new C(len)) : new Array(len);
              var k = 0;
              var kValue;
              while (k < len) {
                kValue = items[k];
                if (mapFn) {
                  A[k] =
                    typeof T === "undefined"
                      ? mapFn(kValue, k)
                      : mapFn.call(T, kValue, k);
                } else {
                  A[k] = kValue;
                }
                k += 1;
              }
              A.length = len;
              return A;
            };
          })();
        }
        if (!Array.prototype.find) {
          Array.prototype.find = function (predicate) {
            "use strict";
            if (this == null) {
              throw new TypeError(
                "Array.prototype.find called on null or undefined"
              );
            }
            if (typeof predicate !== "function") {
              throw new TypeError("predicate must be a function");
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
            for (var i = 0; i < length; i++) {
              value = list[i];
              if (predicate.call(thisArg, value, i, list)) {
                return value;
              }
            }
            return undefined;
          };
        }
        function CustomEvent(event, params) {
          params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined,
          };
          var evt = document.createEvent("CustomEvent");
          evt.initCustomEvent(
            event,
            params.bubbles,
            params.cancelable,
            params.detail
          );
          return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
      })();
    },
  ]);
});
