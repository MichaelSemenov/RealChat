# План тестирования
---

# Содержание
* [Введение](#instruction) 
* [Объект тестирования](#items)
* [Атрибуты качества](#qualite)
* [Риски](#risk)
* [Аспекты тестирования](#features)
* [Подходы к тестированию](#approach)
* [Представление результатов](#pass) 
* [Выводы](#conclusion)

<a name="instruction"/>
  
## Введение

Данный документ описывает план тестирования приложения ["Real Chat"](https://github.com/MichaelSemenov/RealChat). Документ предназначен для людей, выполняющих тестирование данного проекта. Цель тестирования - проверка соответствия реального поведения программы проекта и ее ожидаемого поведения, которое описано в [требованиях](https://github.com/MichaelSemenov/RealChat/blob/main/documents/requirements.md).

<a name="items"/>

## Объект тестирования

В качестве объектов тестирования можно выделить следующие функциональные требования:

* Удобная переписка;
* Выбор пользователя с кем переписываться;
*	Добавление чата с паролем;
*	Переписка с пользователем в секретном чате;
 
<a name="quality"/>

## Атрибуты качества

1. Функциональность:
    - функциональная полнота: приложение должно выполнять все заявленные функции;
    - функциональная корректность: приложение должно выполнять все заявленные функции корректно;
2. Удобство использования:
   *	Безопасность и конфиденциальность
   *	 Быстрая доставка сообщений
   *	 Интуитивно понятный интерфейс


<a name="risk"/>

## Риски

В данном случае к рискам можно отнести:
* то, что приложение не поддерживает все языки
*	не поддерживаются групповые чаты
* сохранение данных на сервере происходит за счёт клиентской части за счёт get запроса, что делает сохранение данных менее эффективным

<a name="features"/>

## Аспекты тестирования

В ходе тестирования планируется проверить реализацию основных функций приложения. Аспекты, подвергаемые тестированию: 
*	Запуск приложения
*	Тестирование производительности
*	Тестирование безопасности
*	Тестирование совместимости
*	Поддержка нескольких языков
 

### Запуск приложения
Этот вариант использования небходимо протестировать на:
* запуск приложения;
* отображение окна приложения согласно мокапу

### Тестирование производительности
Этот вариант использования необходимо протестировать на:
*	тестирование нагрузки пользователями;
*	тестирование нагрузки большим объемом данных.
  

### Тестирование безопасности
Этот вариант использования необходимо протестировать на:
*	Добавление пользователя в секретный чат;
 

### Тестирование совместимости
Этот вариант использования необходимо протестировать на:
*	Запуск приложения на Windows и IOS;


### Поддержка нескольких языков
Этот вариант необходимо протестировать на:
*	Ведение переписки на русском языке
*	Ведение переписки на английском языке

### Нефункциональные требования:
*	все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента.

<a name="approach"/>

## Подходы к тестированию

При тестировании будет использован ручной подход.

<a name="pass"/>

## Представление результатов

Результаты представлены  в документе "Результаты тестирования"

<a name="conclusion"/>

## Выводы
 Данный тестовый план позволяет протестировать основной функционал приложения. Успешное прохождение всех тестов не гарантирует полной работоспособности на всех версиях платформ и архитектурах, однако позволяет полагать, что данное программное обеспечение работает корректно. 
