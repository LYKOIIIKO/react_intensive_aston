# React - intensive ASTON

## Homework - 1

Необходимо создать начальное приложение, отрисовать список постов (пока с заглушками) и научиться передавать данные через props между компонентами.

**Задание:**

1. Инициализировать проект с помощью Vite + TypeScript.
2. Создать:

    - App.tsx → src/app/
    - MainLayout.tsx → src/shared/layouts/
    - Header, Footer → src/widgets/LayoutHeader/, LayoutFooter/

3. Отобразить список постов-заглушек:

    - PostList → src/widgets/PostList/
    - PostCard → src/entities/post/ui/PostCard.tsx

4. Передавать данные через props, компонент — функциональный.

## Homework - 2

Необходимо добавить модальное окно с информацией о проекте, которое открывается по кнопке в шапке приложения, а также реализовать переключение светлой и тёмной темы через контекст.

**Задание:**

1. Реализовать ThemeContext и переключение темы:

    - ThemeProvider, useTheme → src/shared/lib/theme/
    - ThemeSwitcher → src/features/ThemeSwitcher/ui/

2. Использовать React.Fragment и key в списках.
3. Модалка "О проекте" через React.Portal → src/shared/ui/Modal/
4. Кнопки с обработкой событий → src/shared/ui/Button/

## Homework - 3

Необходимо реализовать отображение модального окна с использованием compound components, добавить фильтрацию постов по длине заголовка, свертывание комментариев и оптимизации через HOC и хуки.

**Задание:**

1. Compound Components:

    - Modal с подкомпонентами (Header, Body, Footer) → src/shared/ui/Modal/

2. HOC withLoading:

    - HOC → src/shared/lib/hoc/
    - Применяется к PostList

3. Свертывание/разворачивание комментариев:

    - CommentList.tsx → src/widgets/CommentList/ui/
    - Используй useState, useCallback

4. Фильтр по длине заголовка:

    - PostLengthFilter → src/features/PostLengthFilter/ui/
    - filterByLength.ts → src/features/PostLengthFilter/lib/

5. Оптимизации:

    - useMemo, useCallback в PostList
