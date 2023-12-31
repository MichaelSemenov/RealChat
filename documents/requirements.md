<h1 align="center">Требования к проекту</h1> <br>
<a href="#vv">1. Введение</a> <br>
<a href="#требования">2. Требования пользователя</a><br>
<pre>  <a href="#test1"> 2.1 программные интерфейсы </a> </pre>
<pre>  <a href="#интерфейсные2"> 2.2 Интерфейсы пользователя </a> </pre>
<pre>  <a href="#интерфейсные3"> 2.3 программные интерфейсы </a> </pre>
<pre>  <a href="#интерфейсные4"> 2.4 Предположения и зависимости</a></pre>

<a href="#требования2"> 3. Системные требования</a><br>
<pre>  <a href="#Функциональные"> 3.1 Функциональне требования </a> </pre>
<pre>  <a href="#Функциональные1"> 3.2 Нефункциональные требования  </a> </pre>
<pre>         <a href="#Функциональные1_1"> 3.2.1 АТРИБУТЫ КАЧЕСТВА </a> </pre>
                


<h1 align="center">Требования </h1><br>
<h1 align="center" id="vv">1 Введение </h1><br>
Название проекта: RealChat.<br>
Данный web-проект позволяет общаться в режиме реального времени на local-хостинге, предоставляемый инструментами пакета, загруженных через node.js. Данное приложение позволяет общаться в чатах, где Вы можете делиться мыслями, идеями и интересами с другими пользователями. Наша команда разработчиков постоянно работает над улучшением функционала приложения, чтобы вы могли наслаждаться комфортн
ым и безопасным общением в любое время и в любом месте. Присоединяйтесь к RealChat и откройте для себя новый уровень общения в Интернете! <br>
<h1 align="center" id="требования">2 Требования пользователя </h1><br>
<h2 align="left" id="test1">2.1 Программные интерфейсы </h2> <br>
Spring Boot (Java), React/JS, node.js, web-socket, CSS, HTML. <br>
<h2 align="left" id="интерфейсные2" >2.2 Интерфейс пользователя </h2><br>
Пользователь, переходя по ссылке, может зарегистрироваться под своим именем в системе. После чего на экране web-браузера можно увидеть следующую информацию:  <br>
-	Окно для ведения переписки с другими пользователями; <br>
-	Общий чат, где пользователи могут вести переписку; <br>
-	Создание общего чата, в котором пользователь вводит <br>
некоторые характеристики; <br>
-	Личные чаты с пользователями. <br>
<h2 align="left" id="интерфейсные3">2.3 Характеристики пользователей </h2><br>
Для проекта RealChat группы пользователей могут быть определены следующим образом: <br>
1. Школьники и студенты - группа пользователей, которая активно использует мессенджеры для общения с друзьями и одноклассниками. Они могут также использовать приложение для учебных целей, например, для общения с преподавателями. Образование может быть различным, от начального до высшего. 
2. Так же группа пользователей, которая использует приложение для общения в рабочих целях, а также для личного общения. Они могут использовать приложение для поиска работы или для деловых контактов.
3. Группа людей, использующие возможности web-приложения для общения с родственниками и друзьями, а также для расширения своего круга общения. Они могут также использовать приложение для участия в онлайн-курсах или для получения консультаций врачей и специалистов.
<h2 align="left" id="интерфейсные4">2.4 Предположения и зависимости </h2> <br>
Факторы, которые могут повлиять на требования к системе, описанные в данном документе:
1. Устройства и операционные системы могут требовать адаптации приложения для обеспечения его работоспособности на всех устройствах.
2. Потребности пользователей в функциональности приложения могут требовать дополнительной разработки функций для их удовлетворений.
3. Потребности в безопасности данных и конфиденциальности могут требовать дополнительных мер безопасности и защиты данных.
4. Потребности в скорости и стабильности работы приложения могут требовать оптимизации производительности приложения и его инфраструктуры. <br>
<h1 align="center" id="требования2" >3 Системные требования</h1>
Требования к интерфейсу: <br>
- Интерфейс чата должен быть интуитивно понятным и простым в использовании.
- Чат должен иметь возможность отображения списка пользователей в комнате.
Требования к тестированию: <br>
- Чат должен быть протестирован на соответствие функциональным требованиям.
- Чат должен быть протестирован на соответствие нефункциональным требованиям, таким как производительность и надежность.
- Чат должен быть протестирован на безопасность и защищенность от атак.
Требования к документации: <br>
- Документация должна содержать инструкции по установке и настройке чата.
- Документация должна содержать описание функций и возможностей чата.
- Документация должна содержать описание API и примеры использования.
Требования к обучению: <br>
- Пользователи должны иметь возможность быстро овладеть основными функциями чата. <br>
<h2 align="left" id="Функциональные">3.1 Функциональные требования </h2><br>
Функциональные требования:
- Чат должен поддерживать отправку и получение текстовых сообщений в режиме реального времени.
- Пользователи должны иметь возможность создавать и присоединяться к различным комнатам чата. <br>
<h2 align="left" id="Функциональные1">3.2 Нефункциональные требования </h2><br>
Нефункциональные требования: <br>
- Чат должен быть быстрым и отзывчивым, чтобы пользователи могли обмениваться сообщениями без задержек.
- Чат должен быть доступен 24/7 и иметь высокую надежность.
- Чат должен быть легко масштабируемым, чтобы поддерживать большое количество пользователей и сообщений.
- Чат должен быть безопасным и защищенным от несанкционированного доступа. <br>

<h3 align="left" id="Функциональные1_1">3.2.1 АТРИБУТЫ КАЧЕСТВА </h3><br>
1. Надежность - важный атрибут качества для чата, который определяет способность системы сохранять работоспособность и обеспечивать доступность для пользователей в любое время. Надежность может измеряться с помощью метрик, таких как время безотказной работы (MTBF) и время восстановления после сбоя (MTTR).
2. Безопасность - важный атрибут качества для чата, который определяет способность системы защищать конфиденциальность, целостность и доступность данных пользователей. Безопасность может измеряться с помощью метрик, таких как количество успешных и неуспешных попыток взлома системы.
3. Производительность - важный атрибут качества для чата, который определяет способность системы обрабатывать большое количество запросов и сообщений пользователей в режиме реального времени. Производительность может измеряться с помощью метрик, таких как время ответа сервера на запросы пользователей и количество сообщений, которые можно обработать за единицу времени.
4. Масштабируемость - важный атрибут качества для чата, который определяет способность системы увеличивать свою производительность и емкость для поддержки большого количества пользователей и сообщений. Масштабируемость может измеряться с помощью метрик, таких как количество пользователей, которые могут использовать систему одновременно, и количество сообщений, которые можно обработать за единицу времени при увеличении нагрузки на систему.

[Requirements_Document_-_rus.docx](https://github.com/MichaelSemenov/RealChat/files/12617144/Requirements_Document_-_rus.docx)
![photo_2023-09-15_08-07-17](https://github.com/MichaelSemenov/RealChat/assets/118275064/17da4028-d5c7-4076-aebf-e29083c821f5)
![photo_2023-09-15_08-07-25](https://github.com/MichaelSemenov/RealChat/assets/118275064/11be7e1a-b1e6-402e-9d1b-55434986defb)
![photo_2023-09-15_08-07-31](https://github.com/MichaelSemenov/RealChat/assets/118275064/39bbf9e4-97b7-4618-870f-dacfeb6f9c8c)
