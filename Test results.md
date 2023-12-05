|Cценарий|Действие|Ожидаемый результат|Фактический результат| Оценка|
|:---|:---|:---|:---|:---|
|001-1-1: Запуск приложения | Запустить приложение | Запуск приложения | Ошибка. Не найден локальный хостинг | Тест не пройден |
|001-1-2: Запуск приложения | Запустить приложение | Загрузка приложения | Запуск приложения | Тест пройден|
| 001-2-1: Отображение окна приложения согласно мокапу|Запустить приложение | Отображение окна приложения согласно мокапу| Отображение окна приложения для ввода имени согласно мокапу | Тест пройден|
|001-2-2: Отображение окна приложения согласно мокапу | Запустить приложение| Отображение окна приложения согласно мокапу | Ошибка отображения окна приложения. Техническая ошибка|Тест не пройден|
|002-1: Нажатие на кнопку connect  | нажать на "connect"| Отображение окна чата со списком авторизованных пользователей| Отображение окна чата со списком авторизованных пользователей|Тест пройден|
|003-1: Отбражение общего чата со списком пользователей | нажать на "connect"|Отображение окна чата со списком авторизованных пользователей |Отображение окна чата со списком авторизованных пользователей | Тест пройден|
|003-1-1: Выбор пользователя | выбрать доступного пользователя из списка авторизованных|переход в чат с данным пользователем | переход в чат с данным пользователем|Тест пройден|
|004-1-1: Создание секретного чата|нажать на "+" |отображение окна ввода пароля для нового чата| отображение окна ввода пароля для нового чата| тест пройден|
|004-1-2: Создание секретного чата|нажать на "+" |отображение окна ввода пароля для нового чата |Ошибка. Неправильно введен пароль |Тест не пройден|
|006-1-1: Подключение к секретному чату|ввести пароль и нажать кнопку "open" | переход в чат с данным пользователем| успешный переход в чат с данным пользователем| тест пройден|
| 006-1-2: Подключение к секретному чату|ввести пароль и нажать кнопку "open" | переход в чат с данным пользователем|Ошибка. Неправильный пароль. А также создание нового чата с этим паролем|тест не пройден|
|007-1-2: Переход в общий чат | нажать "connect"|переход в общий чат со всеми пользователями | переход в общий чат со всеми пользователями| тест пройден |
| 008-1: Все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента.| Запустить приложение| Элементы понятны пользователю|Элементы понятны пользователю |тест пройден|