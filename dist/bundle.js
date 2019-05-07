/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/main.css?");

/***/ }),

/***/ "./src/assets/css/shared.css":
/*!***********************************!*\
  !*** ./src/assets/css/shared.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/shared.css?");

/***/ }),

/***/ "./src/assets/css/task-form.css":
/*!**************************************!*\
  !*** ./src/assets/css/task-form.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/task-form.css?");

/***/ }),

/***/ "./src/controllers/project-controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/project-controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n/* harmony import */ var _data_store_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data_store/repository */ \"./src/data_store/repository.js\");\n\n\n\nconst ProjectController = () => {\n\n    const create = (name) => \n        Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().saveProject(Object(_models_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(generateId(), name))\n\n    const addTask = (task, toProject) => {\n        if ( task !== undefined ){\n            let record = Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().findProject(toProject.id)\n            record.tasks.push(task)\n            Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().saveProject(record)\n        }\n    }\n\n    const removeProject = id => {\n        try {            \n            Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().removeProject(id)\n            return true\n        } catch (error) {\n            alert(\"Ocorred an erro during removing: \" + error)\n            return false\n        }\n    }\n\n    const removeTask = (taskId, fromProjecId) => {\n        let project = Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().findProject(fromProjecId)\n        project.tasks.splice(getTaskIndex(project, taskId),1)\n        Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().saveProject(project)  \n    }\n\n    const getProjects = () => Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getProjects()\n\n    const getProject = id => {\n        let project = Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().findProject(project.id)        \n        return (project !== undefined) ? project : null \n    }\n\n    const getTasks = projId => Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().findProject(projId).tasks\n\n    const getTaskIndex = (project, taskId) => project.tasks.findIndex(task => task.id == taskId)\n\n    const generateId = () => Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getProjects().length + 1\n\n    const totalOfProjects = () => Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getProjects().length\n\n    return {\n        create, getProjects, getProject, addTask, \n        removeTask, getTasks, removeProject, totalOfProjects\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectController);\n\n//# sourceURL=webpack:///./src/controllers/project-controller.js?");

/***/ }),

/***/ "./src/controllers/task-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/task-controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/task */ \"./src/models/task.js\");\n/* harmony import */ var _data_store_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data_store/repository */ \"./src/data_store/repository.js\");\n\n\n\nconst TaskController = (() => {\n\n    const create = (id, title, description, dueDate, priority, projId) =>\n      Object(_models_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, title, description, dueDate, priority, projId)\n\n    const generateId = toTaskFromProject => {\n        return Object(_data_store_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().findProject(toTaskFromProject.id).tasks.length + 1\n    }\n\n\n    return {\n        create, generateId\n    }\n\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskController);\n\n\n//# sourceURL=webpack:///./src/controllers/task-controller.js?");

/***/ }),

/***/ "./src/data_store/repository.js":
/*!**************************************!*\
  !*** ./src/data_store/repository.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Repository = (() => {\n\n    let storage = localStorage\n\n    const saveProject = project => {\n        storage.setItem(project.id, JSON.stringify(project))\n        return project\n    }\n\n    const findProject = id => JSON.parse(storage.getItem(id));\n\n    const removeProject = id => {        \n        storage.removeItem(id)\n    }\n\n    const getProjects = () => \n      Object.assign([], storage)\n            .filter(record => record !== null)\n            .map(record => JSON.parse(record));\n\n    return {\n        saveProject, findProject, getProjects, removeProject\n    }\n})\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repository);\n\n//# sourceURL=webpack:///./src/data_store/repository.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/main.css */ \"./src/assets/css/main.css\");\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_css_task_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/task-form.css */ \"./src/assets/css/task-form.css\");\n/* harmony import */ var _assets_css_task_form_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_task_form_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_css_shared_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/shared.css */ \"./src/assets/css/shared.css\");\n/* harmony import */ var _assets_css_shared_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_shared_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_dom_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dom-search */ \"./src/ui/dom-search.js\");\n/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/utils */ \"./src/util/utils.js\");\n/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-app */ \"./src/todo-app.js\");\n\n\n\n\n\n\n\nlet txtProjName = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().getElement('#field-project-name')\nlet app = Object(_todo_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\napp.createDefaultProject('Learn JavaScript')\napp.loadProjects()\n\nObject(_ui_dom_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().getElement('#bt-project').addEventListener('click', () => newProject())\n\ntxtProjName.addEventListener('keydown', event => {    \n    if (event.keyCode === 13)\n        newProject()\n})\n\n\n\nconst newProject = () => {\n    if (txtProjName.value.length > 0) {\n\n        let projectUI = app.createProject(txtProjName.value)\n\n        Object(_util_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().controlListTasksVibility(projectUI)\n\n        txtProjName.value = ''\n        txtProjName.focus()\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Project = (id, name) => {\n\n    let tasks = []    \n    \n    const getTask = id => tasks.filter(task => task.id === id)\n\n    return {\n        id, name, tasks, getTask\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/models/project.js?");

/***/ }),

/***/ "./src/models/task.js":
/*!****************************!*\
  !*** ./src/models/task.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = (id, title, description, dueDate, priority, projId) => {\n\n    return {\n        id, title, description, dueDate, priority, projId\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/models/task.js?");

/***/ }),

/***/ "./src/partials/task-form.html":
/*!*************************************!*\
  !*** ./src/partials/task-form.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"modal-content\\\">\\n    <div class=\\\"modal-header\\\">\\n        <span class=\\\"title\\\">New Task</span>\\n        <span class=\\\"close-button\\\">&times;</span>\\n    </div>\\n    <div class=\\\"fields-wrapper\\\">\\n        <div class=\\\"row\\\">\\n            <label for=\\\"task-name\\\">Name</label>\\n            <input id=\\\"task-name\\\" type=\\\"text\\\" name=\\\"task-name\\\" autofocus\\n                class=\\\"form-field\\\" placeholder=\\\"Task name\\\">\\n        </div>\\n        <div class=\\\"row\\\">\\n            <label for=\\\"task-desc\\\">Description</label>\\n            <textarea name=\\\"task-desc\\\" id=\\\"task-desc\\\" cols=\\\"30\\\" rows=\\\"4\\\" maxlength=\\\"250\\\">\\n                </textarea>\\n        </div>\\n        <div class=\\\"row\\\">\\n            <label for=\\\"task-date\\\">Due Date</label>\\n            <input type=\\\"date\\\" name=\\\"task-date\\\" id=\\\"task-date\\\" class=\\\"form-field\\\">\\n        </div>\\n        <div class=\\\"row\\\">\\n            <label for=\\\"task-priority\\\">Priority</label>\\n            <select name=\\\"task-priority\\\" id=\\\"task-priority\\\" class=\\\"form-field\\\">\\n                <option value=\\\"\\\">Select the priority</option>\\n                <option value=\\\"Low\\\">Low</option>\\n                <option value=\\\"Medium\\\">Medium</option>\\n                <option value=\\\"High\\\">High</option>\\n            </select>\\n        </div>\\n        <div class=\\\"row buttons\\\">\\n            <input id=\\\"cancel-button\\\" type=\\\"button\\\" value=\\\"Cancelar\\\">\\n            <input id=\\\"save-button\\\" type=\\\"button\\\" value=\\\"Salvar\\\">\\n        </div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./src/partials/task-form.html?");

/***/ }),

/***/ "./src/todo-app.js":
/*!*************************!*\
  !*** ./src/todo-app.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_projectUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/projectUI */ \"./src/ui/projectUI.js\");\n/* harmony import */ var _ui_dom_task_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dom-task-list */ \"./src/ui/dom-task-list.js\");\n/* harmony import */ var _ui_dom_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dom-search */ \"./src/ui/dom-search.js\");\n/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/project-controller */ \"./src/controllers/project-controller.js\");\n\n\n\n\n\nlet controller = Object(_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\nlet projectUI = Object(_ui_projectUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nlet projectsUI = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().getElement('.projects')\n\nconst TodoApp = () => {\n\n    const createDefaultProject = withTitle => {        \n        if (controller.totalOfProjects() == 0)\n            createProject(withTitle)\n    }\n\n    const createProject = withTitle => \n        addToProjectList(buildProject(controller.create(withTitle), projectUI.withTasks()))\n\n    const loadProjects = () => {\n        controller.getProjects().forEach(project => {\n            if (!projectAlreadLoaded(project))\n                addToProjectList(buildProject(project, loadTasks(project)))\n        })\n    }\n\n    const loadTasks = fromProject => mapToTasksUI(fromProject.tasks, projectUI.withTasks())\n\n    const mapToTasksUI = (tasks, toTasksUI) =>{\n        tasks.forEach(task => Object(_ui_dom_task_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().loadTask(task, toTasksUI))\n        return toTasksUI\n    } \n\n    const addToProjectList = project =>  projectsUI.appendChild(project)\n\n    const projectAlreadLoaded = project => {        \n        \n        return Object.assign([],projectsUI.children)\n              .some(projectDB => Number(projectDB.getAttribute('storageid')) === project.id )\n    }\n\n    const buildProject = (projectModel, taskskUI) => {\n        if (projectModel != undefined)\n            return projectUI.create(\n                        projectModel, projectUI.withHeader(\n                            projectUI.withTitle(projectModel),\n                            projectUI.witButtons(projectUI.withBtAddTask(taskskUI, projectModel),\n                                                 projectUI.withBtDelProject(projectModel, controller))\n                        ), taskskUI\n                    )\n    }\n\n    return {\n        createProject, loadProjects, createDefaultProject\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoApp);\n\n//# sourceURL=webpack:///./src/todo-app.js?");

/***/ }),

/***/ "./src/ui/dom-elem.js":
/*!****************************!*\
  !*** ./src/ui/dom-elem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DOMElement = (type) => ({\n\n  element: document.createElement(type),\n\n  setContent(value) {\n    if (value !== undefined && value !== null)\n      this.element.appendChild(document.createTextNode(value));\n    return this;\n  },\n\n  addClasses(classes) {\n    if (classes !== undefined && classes.length !== 0)\n      classes.forEach(classe => this.element.classList.add(classe)) \n    return this;\n  },\n\n  addAttributes(attributes) {\n    if (attributes !== undefined && attributes.length !== 0) {\n      for (let key in attributes) {\n        this.element.setAttribute(key, attributes[key]);\n      }\n    }\n\n    return this;\n  },\n\n  addChildren(children) {\n    if (children !== undefined && children.length !== 0) {\n      children.forEach(child => {\n        if( child !== undefined)\n          this.element.appendChild(child);\n      });\n    }\n\n    return this;\n  },\n\n  attachEvent(event, eventBody) {\n    this.element.addEventListener(event, eventBody);\n    return this;\n  },\n\n  applyStyles(...styles) {\n    if (styles != undefined)\n      this.element.setAttribute('style', styles);\n    return this;\n  },\n\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMElement);\n\n\n//# sourceURL=webpack:///./src/ui/dom-elem.js?");

/***/ }),

/***/ "./src/ui/dom-search.js":
/*!******************************!*\
  !*** ./src/ui/dom-search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DOMSearch = () => {\n\n  const getGrandParentElement = (selector, level) => {\n      let parentWanted = null;\n\n      if (notNull(selector)) {\n\n        for (let i = 0; i < level; i++) {\n          if (parentWanted === null) {\n            parentWanted = selector.parentElement;\n          } else {\n            parentWanted = parentWanted.parentElement;\n          }\n        }\n      }\n\n      return parentWanted;\n\n    };\n\n  const getElement = selector =>\n    notNull(selector) ? document.querySelector(selector) : null;\n\n  const getChildren = (element,level) => {\n    \n    if ( notNull(element) ) {\n      return (level != undefined) ? element.children[level] : element.children;\n    }\n    return [];\n\n  }\n\n  const getGrandSon = (fromElement, grandSonaWanted) => {\n    if (notNull(fromElement)) {\n      return (grandSonaWanted !== undefined) ? fromElement.querySelector(grandSonaWanted) : null;\n    }  \n    return null;\n  }\n\n  const notNull = element => (element !== undefined && element !== null);\n\n  return {\n    getGrandParentElement, getElement, getChildren, getGrandSon\n  };\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMSearch);\n\n\n//# sourceURL=webpack:///./src/ui/dom-search.js?");

/***/ }),

/***/ "./src/ui/dom-task-form.js":
/*!*********************************!*\
  !*** ./src/ui/dom-task-form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-search */ \"./src/ui/dom-search.js\");\n/* harmony import */ var _dom_task_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-task-list */ \"./src/ui/dom-task-list.js\");\n/* harmony import */ var _partials_task_form_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/task-form.html */ \"./src/partials/task-form.html\");\n/* harmony import */ var _partials_task_form_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_partials_task_form_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controllers_task_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/task-controller */ \"./src/controllers/task-controller.js\");\n\n\n\n\n\nconst taskControl = Object(_controllers_task_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\nconst DOMFormTask = ((tasksEL, project) => {\n\n  let taskForm\n\n  const show = () => {\n    initForm()\n    attachEventToCloseButton()\n    attachEventToSaveButton()\n    toggleTaskForm()\n    Object(_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getElement('#task-name').focus()\n  }\n\n  const save = () => {\n    Object(_dom_task_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().addTask(createTask(project), tasksEL, project)\n    toggleTaskForm()\n  }\n\n  const initForm = () => {\n    taskForm = Object(_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getElement('#formTask')\n    taskForm.innerHTML = _partials_task_form_html__WEBPACK_IMPORTED_MODULE_2___default.a\n  }\n\n  const toggleTaskForm = () =>  taskForm.classList.toggle('show-modal')\n\n  const attachEventToCloseButton =() => {\n    Object(_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getElement(\".close-button\")\n               .addEventListener('click', toggleTaskForm)\n    Object(_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getElement(\"#cancel-button\")\n               .addEventListener('click', toggleTaskForm)\n  }\n\n  const attachEventToSaveButton = () =>\n    Object(_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getElement(\"#save-button\")\n               .addEventListener('click', save)\n\n  const getFieldValue = selector => Object(_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getElement(selector).value.trim()\n\n  const createTask = () =>\n    taskControl.create(taskControl.generateId(project),\n                       getFieldValue('#task-name'),\n                       getFieldValue('#task-desc'),\n                       getFieldValue('#task-date'),\n                       getFieldValue('#task-priority'),\n                      project.id)\n\n  return { show }\n\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMFormTask);\n\n\n//# sourceURL=webpack:///./src/ui/dom-task-form.js?");

/***/ }),

/***/ "./src/ui/dom-task-list.js":
/*!*********************************!*\
  !*** ./src/ui/dom-task-list.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_dom_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/dom-task */ \"./src/ui/dom-task.js\");\n/* harmony import */ var _ui_dom_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/dom-search */ \"./src/ui/dom-search.js\");\n/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utils */ \"./src/util/utils.js\");\n/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/project-controller */ \"./src/controllers/project-controller.js\");\n\n\n\n\n\n\nconst prjControl = Object(_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\nconst DOMTaskList = (() => {\n\n  const addTask = (task, tasksEL, toProject) => {\n\n      tasksEL.appendChild(Object(_ui_dom_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task).create())\n      prjControl.addTask(task, toProject)\n\n      if (tasksEL.style.display === 'none')\n        tasksEL.style.display = 'flex'\n  }\n\n  const removeTask = (task, project) => {\n    let tasks = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getChildren(project,1)\n    tasks.removeChild(task)\n    prjControl.removeTask(task.getAttribute('storageid'),\n                                   project.getAttribute('storageid'))\n    Object(_util_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().controlListTasksVibility(project)\n  }\n\n  const loadTask = (task, tasksEL) => {\n    tasksEL.appendChild(Object(_ui_dom_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task).create())\n  }\n  \n  return {\n    addTask, removeTask, loadTask\n  }\n\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMTaskList);\n\n\n//# sourceURL=webpack:///./src/ui/dom-task-list.js?");

/***/ }),

/***/ "./src/ui/dom-task.js":
/*!****************************!*\
  !*** ./src/ui/dom-task.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/dom-elem */ \"./src/ui/dom-elem.js\");\n/* harmony import */ var _ui_dom_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/dom-search */ \"./src/ui/dom-search.js\");\n/* harmony import */ var _ui_dom_task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/dom-task-list */ \"./src/ui/dom-task-list.js\");\n\n\n\n\nconst DOMTask = ((task) => {\n\n    const create = () =>\n        Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['task','box'])\n            .addAttributes({ id: 'Task' + task.id, storageId: task.id })\n            .addChildren([createTaskHeader(), createTaskContent(), createTaskFooter()])\n            .element\n\n\n    const createTaskHeader = () =>\n        Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['task-header'])\n            .addChildren([\n                Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h4').setContent(task.title).element,\n                Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').addClasses(['bt-task','bt-remove'])\n                    .attachEvent('click', () => {\n                        let task = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getGrandParentElement(event.target,2)\n                        let project = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getGrandParentElement(task,2)\n                        Object(_ui_dom_task_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().removeTask(task, project)\n                    }).setContent('X').element\n            ]).element\n\n    const createTaskContent = () =>\n        Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['task-content'])\n            .addChildren([Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p').setContent(task.description).element])\n            .element\n\n    const createTaskFooter = () =>\n        Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['task-footer'])\n            .addChildren([\n                Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').addChildren([\n                    Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').addClasses(['bold-label']).setContent('Due date: ').element\n                ]).setContent(task.dueDate).element,\n\n                Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').addChildren([\n                    Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').addClasses(['bold-label']).setContent('Priority: ').element\n                ]).setContent(task.priority).element,\n\n                Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').addChildren([\n                    Object(_ui_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input').addAttributes({id: 'chkDone', type: 'checkbox'})\n                                       .attachEvent('click', () => { changeTaskDoneState(event.target) })\n                                       .element\n                ]).setContent('Done').element\n            ]).element\n\n    const changeTaskDoneState = checkbox => {\n        let task = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getGrandParentElement(checkbox,3)\n        let taskTitle = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getGrandSon(task,'h4')\n        if (event.target.checked) {\n            taskTitle.classList.add('task-done')\n        } else {\n            taskTitle.classList.remove('task-done')\n        }\n    }            \n\n    return { create }\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMTask);\n\n\n//# sourceURL=webpack:///./src/ui/dom-task.js?");

/***/ }),

/***/ "./src/ui/projectUI.js":
/*!*****************************!*\
  !*** ./src/ui/projectUI.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_elem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elem */ \"./src/ui/dom-elem.js\");\n/* harmony import */ var _dom_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-search */ \"./src/ui/dom-search.js\");\n/* harmony import */ var _dom_task_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-task-form */ \"./src/ui/dom-task-form.js\");\n\n\n\n\nconst ProjectUI = (() => {\n\n    const withTasks = () => Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['tasks']).element\n\n    const withBtAddTask = (toTaskList, project) =>\n        Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').setContent('Add task')\n            .addClasses(['bt', 'bt-add'])\n            .attachEvent('click', () => Object(_dom_task_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(toTaskList, project).show())\n            .element\n\n    const withBtDelProject = (project, controller) =>\n        Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span').setContent('X')\n            .addClasses(['bt', 'bt-remove'])\n            .attachEvent('click', event => {\n                if (controller.removeProject(project.id))\n                    Object(_dom_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getGrandParentElement(event.target, 3).remove()\n            }).element\n\n    const witButtons = (withBtAddTask, withBtDelProject) =>\n        Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['bt-wrapper'])\n            .addChildren([withBtAddTask, withBtDelProject])\n            .element\n\n    const withTitle = project =>\n        Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3').setContent(project.name).element\n\n    const withHeader = (withTitle, withActionButtons) =>\n        Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['project-header'])\n            .addChildren([withTitle, withActionButtons]).element\n\n    const create = (project, withHeader, tasks) =>\n        Object(_dom_elem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div').addClasses(['project'])\n            .addAttributes({ id: 'Project' + project.id, storageId: project.id })\n            .addChildren([withHeader, tasks])\n            .element\n\n    return {\n        withTasks, withBtAddTask, withBtDelProject,\n        witButtons, withTitle, withHeader,\n        create\n    }\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectUI);\n\n//# sourceURL=webpack:///./src/ui/projectUI.js?");

/***/ }),

/***/ "./src/util/utils.js":
/*!***************************!*\
  !*** ./src/util/utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_dom_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/dom-search */ \"./src/ui/dom-search.js\");\n\n\nconst Utils = (() => {\n\n  const controlListTasksVibility = projectEL => {\n        let tasks = Object(_ui_dom_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getChildren(projectEL,1)\n        if (tasks !== undefined)\n          tasks.style.display = (tasks.children.length > 0) ? 'flex' : 'none'\n    }\n\n  return {\n    controlListTasksVibility\n  }\n\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n\n//# sourceURL=webpack:///./src/util/utils.js?");

/***/ })

/******/ });