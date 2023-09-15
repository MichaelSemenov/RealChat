# RealChat
Software Development Life Cycle Project

# Требования к проекту
1 Введение
Название проекта: RealChat.
Данный web-проект позволяет общаться в режиме реального времени на local-хостинге, предоставляемый инструментами пакета, загруженных через node.js. Данное приложение позволяет общаться в чатах, где Вы можете делиться мыслями, идеями и интересами с другими пользователями. Наша команда разработчиков постоянно работает над улучшением функционала приложения, чтобы вы могли наслаждаться комфортным и безопасным общением в любое время и в любом месте. Присоединяйтесь к RealChat и откройте для себя новый уровень общения в Интернете!
2 Требования пользователя
2.1 Программные интерфейсы
Spring Boot (Java), React/JS, node.js, web-socket, CSS.
2.2 Интерфейс пользователя
Пользователь, переходя по ссылке, может зарегистрироваться под своим именем в системе. После чего на экране web-браузера можно увидеть следующую информацию: 
-	Окно для ведения переписки с другими пользователями;
-	Общий чат, где пользователи могут вести переписку;
-	Создание общего чата, в котором пользователь вводит
некоторые характеристики;
-	Личные чаты с пользователями.
2.3 Характеристики пользователей
Для проекта RealChat группы пользователей могут быть определены следующим образом:
1. Школьники и студенты - группа пользователей, которая активно использует мессенджеры для общения с друзьями и одноклассниками. Они могут также использовать приложение для учебных целей, например, для общения с преподавателями. Образование может быть различным, от начального до высшего. 
2. Так же группа пользователей, которая использует приложение для общения в рабочих целях, а также для личного общения. Они могут использовать приложение для поиска работы или для деловых контактов.
3. Группа людей, использующие возможности web-приложения для общения с родственниками и друзьями, а также для расширения своего круга общения. Они могут также использовать приложение для участия в онлайн-курсах или для получения консультаций врачей и специалистов.
2.4 Предположения и зависимости
Факторы, которые могут повлиять на требования к системе, описанные в данном документе:
1. Устройства и операционные системы могут требовать адаптации приложения для обеспечения его работоспособности на всех устройствах.
2. Потребности пользователей в функциональности приложения могут требовать дополнительной разработки функций для их удовлетворений.
3. Потребности в безопасности данных и конфиденциальности могут требовать дополнительных мер безопасности и защиты данных.
4. Потребности в скорости и стабильности работы приложения могут требовать оптимизации производительности приложения и его инфраструктуры.
3 Системные требования
Требования к интерфейсу:
- Интерфейс чата должен быть интуитивно понятным и простым в использовании.
- Чат должен иметь возможность отображения списка пользователей в комнате.

Требования к тестированию:
- Чат должен быть протестирован на соответствие функциональным требованиям.
- Чат должен быть протестирован на соответствие нефункциональным требованиям, таким как производительность и надежность.
- Чат должен быть протестирован на безопасность и защищенность от атак.

Требования к документации:
- Документация должна содержать инструкции по установке и настройке чата.
- Документация должна содержать описание функций и возможностей чата.
- Документация должна содержать описание API и примеры использования.
Требования к обучению:
- Пользователи должны иметь возможность быстро овладеть основными функциями чата.
3.1 Функциональные требования
Функциональные требования:
- Чат должен поддерживать отправку и получение текстовых сообщений в режиме реального времени.
- Пользователи должны иметь возможность создавать и присоединяться к различным комнатам чата.
3.2 Нефункциональные требования
Нефункциональные требования:
- Чат должен быть быстрым и отзывчивым, чтобы пользователи могли обмениваться сообщениями без задержек.
- Чат должен быть доступен 24/7 и иметь высокую надежность.
- Чат должен быть легко масштабируемым, чтобы поддерживать большое количество пользователей и сообщений.
- Чат должен быть безопасным и защищенным от несанкционированного доступа.

3.2.1 АТРИБУТЫ КАЧЕСТВА
1. Надежность - важный атрибут качества для чата, который определяет способность системы сохранять работоспособность и обеспечивать доступность для пользователей в любое время. Надежность может измеряться с помощью метрик, таких как время безотказной работы (MTBF) и время восстановления после сбоя (MTTR).
2. Безопасность - важный атрибут качества для чата, который определяет способность системы защищать конфиденциальность, целостность и доступность данных пользователей. Безопасность может измеряться с помощью метрик, таких как количество успешных и неуспешных попыток взлома системы.
3. Производительность - важный атрибут качества для чата, который определяет способность системы обрабатывать большое количество запросов и сообщений пользователей в режиме реального времени. Производительность может измеряться с помощью метрик, таких как время ответа сервера на запросы пользователей и количество сообщений, которые можно обработать за единицу времени.
4. Масштабируемость - важный атрибут качества для чата, который определяет способность системы увеличивать свою производительность и емкость для поддержки большого количества пользователей и сообщений. Масштабируемость может измеряться с помощью метрик, таких как количество пользователей, которые могут использовать систему одновременно, и количество сообщений, которые можно обработать за единицу времени при увеличении нагрузки на систему.

