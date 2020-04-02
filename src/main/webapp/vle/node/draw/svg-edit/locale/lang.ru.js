/*globals svgEditor */
svgEditor.readLang({
	lang: "ru",
	dir : "ltr",
	common: {
		"ok": "Сохранить",
		"cancel": "Отменить",
		"key_backspace": "Backspace", 
		"key_del": "Delete", 
		"key_down": "Вниз", 
		"key_up": "Вверх", 
		"more_opts": "More Options",
		"url": "URL",
		"width": "Width",
		"height": "Height"
	},
	misc: {
		"powered_by": "Powered by"
	}, 
	ui: {
		"toggle_stroke_tools": "Show/hide more stroke tools",
		"palette_info": "Нажмите для изменения цвета заливки, Shift-Click изменить цвета обводки",
		"zoom_level": "Изменить масштаб",
		"panel_drag": "Drag left/right to resize side panel"
	},
	properties: {
		"id": "Identify the element",
		"fill_color": "Изменить цвет заливки",
		"stroke_color": "Изменить цвет обводки",
		"stroke_style": "Изменить стиль обводки",
		"stroke_width": "Изменить толщину обводки",
		"pos_x": "Изменить горизонтальный координат",
		"pos_y": "Изменить вертикальный координат",
		"linecap_butt": "Linecap: Butt",
		"linecap_round": "Linecap: Round",
		"linecap_square": "Linecap: Square",
		"linejoin_bevel": "Linejoin: Bevel",
		"linejoin_miter": "Linejoin: Miter",
		"linejoin_round": "Linejoin: Round",
		"angle": "Изменить угол поворота",
		"blur": "Change gaussian blur value",
		"opacity": "Изменить непрозрачность элемента",
		"circle_cx": "Изменить горизонтальный координат (CX) окружности",
		"circle_cy": "Изменить вертикальный координат (CY) окружности",
		"circle_r": "Изменить радиус окружности",
		"ellipse_cx": "Изменить горизонтальный координат (CX) эллипса",
		"ellipse_cy": "Изменить вертикальный координат (CY) эллипса",
		"ellipse_rx": "Изменить горизонтальный радиус эллипса",
		"ellipse_ry": "Изменить вертикальный радиус эллипса",
		"line_x1": "Изменить горизонтальный координат X начальной точки линии",
		"line_x2": "Изменить горизонтальный координат X конечной точки линии",
		"line_y1": "Изменить вертикальный координат Y начальной точки линии",
		"line_y2": "Изменить вертикальный координат Y конечной точки линии",
		"rect_height": "Изменениe высоту прямоугольника",
		"rect_width": "Измененить ширину прямоугольника",
		"corner_radius": "Радиус закругленности угла",
		"image_width": "Изменить ширину изображения",
		"image_height": "Изменить высоту изображения",
		"image_url": "Изменить URL",
		"node_x": "Изменить горизонтальную координату узла",
		"node_y": "Изменить вертикальную координату узла",
		"seg_type": "Изменить вид",
		"straight_segments": "Отрезок",
		"curve_segments": "Сплайн",
		"text_contents": "Изменить содержание текста",
		"font_family": "Изменить семейство шрифтов",
		"font_size": "Изменить размер шрифта",
		"bold": "Жирный",
		"italic": "Курсив"
	},
	tools: { 
		"main_menu": "Main Menu",
		"bkgnd_color_opac": "Изменить цвет фона или прозрачность",
		"connector_no_arrow": "No arrow",
		"fitToContent": "Под размер содержимого",
		"fit_to_all": "Под размер всех слоев",
		"fit_to_canvas": "Под размер холста",
		"fit_to_layer_content": "Под размер содержания слоя",
		"fit_to_sel": "Под размер выделенного",
		"align_relative_to": "Выровнять по отношению к ...",
		"relativeTo": "По отношению к ",
		"страница": "страница",
		"largest_object": "Наибольший объект",
		"selected_objects": "Выделенные объекты",
		"smallest_object": "Самый маленький объект",
		"new_doc": "Создать изображение",
		"open_doc": "Открыть изображение",
		"export_img": "Export",
		"save_doc": "Сохранить изображение",
		"import_doc": "Import SVG",
		"align_to_page": "Align Element to Page",
		"align_bottom": "Выровнять по нижнему краю",
		"align_center": "Центрировать по вертикальной оси",
		"align_left": "По левому краю",
		"align_middle": "Центрировать по горизонтальной оси",
		"align_right": "По правому краю",
		"align_top": "Выровнять по верхнему краю",
		"mode_select": "Выделить",
		"mode_fhpath": "Карандаш",
		"mode_line": "Линия",
		"mode_connect": "Connect two objects",
		"mode_rect": "Rectangle Tool",
		"mode_square": "Square Tool",
		"mode_fhrect": "Прямоугольник от руки",
		"mode_ellipse": "Эллипс",
		"mode_circle": "Окружность",
		"mode_fhellipse": "Эллипс от руки",
		"mode_path": "Контуры",
		"mode_shapelib": "Shape library",
		"mode_text": "Текст",
		"mode_image": "Изображение",
		"mode_zoom": "Лупа",
		"mode_eyedropper": "Eye Dropper Tool",
		"no_embed": "NOTE: This image cannot be embedded. It will depend on this path to be displayed",
		"undo": "Отменить",
		"redo": "Вернуть",
		"tool_source": "Редактировать исходный код",
		"wireframe_mode": "Каркас",
		"toggle_grid": "Show/Hide Grid",
		"clone": "Clone Element(s)",
		"del": "Delete Element(s)",
		"group_elements": "Создать группу элементов",
		"make_link": "Make (hyper)link",
		"set_link_url": "Set link URL (leave empty to remove)",
		"to_path": "В контур",
		"reorient_path": "Изменить ориентацию контура",
		"ungroup": "Разгруппировать элементы",
		"docprops": "Свойства документа",
		"imagelib": "Image Library",
		"move_bottom": "Опустить",
		"move_top": "Поднять",
		"node_clone": "Создать копию узла",
		"node_delete": "Удалить узел",
		"node_link": "Связать узлы",
		"add_subpath": "Add sub-path",
		"openclose_path": "Open/close sub-path",
		"source_save": "Сохранить",
		"cut": "Cut",
		"copy": "Copy",
		"paste": "Paste",
		"paste_in_place": "Paste in Place",
		"Delete": "Delete",
		"group": "Group",
		"move_front": "Bring to Front",
		"move_up": "Bring Forward",
		"move_down": "Send Backward",
		"move_back": "Send to Back"
	},
	layers: {
		"layer":"Слой",
		"layers": "Layers",
		"del": "Удалить слой",
		"move_down": "Опустить слой",
		"new": "Создать слой",
		"rename": "Переименовать Слой",
		"move_up": "Поднять слой",
		"dupe": "Duplicate Layer",
		"merge_down": "Merge Down",
		"merge_all": "Merge All",
		"move_elems_to": "Переместить выделенные элементы:",
		"move_selected": "Переместить выделенные элементы на другой слой"
	},
	config: {
		"image_props": "Свойства изображения",
		"doc_title": "Название",
		"doc_dims": "Размеры холста",
		"included_images": "Встроенные изображения",
		"image_opt_embed": "Локальные файлы",
		"image_opt_ref": "По ссылкам",
		"editor_prefs": "Параметры",
		"icon_size": "Размер значков",
		"language": "Язык",
		"background": "Фон",
		"editor_img_url": "Image URL",
		"editor_bg_note": "(Фон не сохранится вместе с изображением.)",
		"icon_large": "Большие",
		"icon_medium": "Средние",
		"icon_small": "Малые",
		"icon_xlarge": "Огромные",
		"select_predefined": "Выбирать предопределенный размер",
		"units_and_rulers": "Units & Rulers",
		"show_rulers": "Show rulers",
		"base_unit": "Base Unit:",
		"grid": "Grid",
		"snapping_onoff": "Snapping on/off",
		"snapping_stepsize": "Snapping Step-Size:",
		"grid_color": "Grid color"
	},
	shape_cats: {
		"basic": "Basic",
		"object": "Objects",
		"symbol": "Symbols",
		"arrow": "Arrows",
		"flowchart": "Flowchart",
		"animal": "Animals",
		"game": "Cards & Chess",
		"dialog_balloon": "Dialog balloons",
		"electronics": "Electronics",
		"math": "Mathematical",
		"music": "Music",
		"misc": "Miscellaneous",
		"raphael_1": "raphaeljs.com set 1",
		"raphael_2": "raphaeljs.com set 2"
	},
	imagelib: {
		"select_lib": "Select an image library",
		"show_list": "Show library list",
		"import_single": "Import single",
		"import_multi": "Import multiple",
		"open": "Open as new document"
	},
	notification: {
		"invalidAttrValGiven":"Некорректное значение аргумента",
		"noContentToFitTo":"Нет содержания, по которому выровнять.",
		"dupeLayerName":"Слой с этим именем уже существует.",
		"enterUniqueLayerName":"Пожалуйста, введите имя для слоя.",
		"enterNewLayerName":"Пожалуйста, введите новое имя.",
		"layerHasThatName":"Слой уже называется этим именем.",
		"QmoveElemsToLayer":"Переместить выделенные элементы на слой '%s'?",
		"QwantToClear":"Вы хотите очистить?\nИстория действий будет забыта!",
		"QwantToOpen":"Do you want to open a new file?\nThis will also erase your undo history!",
		"QerrorsRevertToSource":"Была проблема при парсинге вашего SVG исходного кода.\nЗаменить его предыдущим SVG кодом?",
		"QignoreSourceChanges":"Забыть без сохранения?",
		"featNotSupported":"Возможность не реализована",
		"enterNewImgURL":"Введите новый URL изображения",
		"defsFailOnSave": "NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.",
		"loadingImage":"Loading image, please wait...",
		"saveFromBrowser": "Select \"Save As...\" in your browser to save this image as a %s file.",
		"noteTheseIssues": "Also note the following issues: ",
		"unsavedChanges": "There are unsaved changes.",
		"enterNewLinkURL": "Enter the new hyperlink URL",
		"errorLoadingSVG": "Error: Unable to load SVG data",
		"URLloadFail": "Unable to load from URL",
		"retrieving": "Retrieving \"%s\"..."
	}
});