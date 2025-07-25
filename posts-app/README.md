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

## Homework - 4

Необходимо добавить маршруты для страниц с постами, комментариями, альбомами, фото и задачами пользователей. Реализовать навигацию и кастомный хук для получения постов.

**Задание:**

1. Настроить маршруты:

    - /posts, /posts/:id, /users/:id/albums, /albums/:id/photos, /users/:id/todos, /users/:id/posts
    - Роуты → src/pages/
    - Роутинг → src/app/providers/router/

2. Навигация через NavLink → UserTabs → src/widgets/UserTabs/
3. Хук usePosts → src/features/PostList/model/hooks/

## Homework - 5

Необходимо настроить глобальное состояние приложения с использованием Redux Toolkit и подключить работу с API через RTK Query. Реализовать получение данных и кэширование.

**Задание:**

1. Redux Toolkit Store → src/app/providers/store/
2. RTK Query API:

    - postsApi, commentsApi, albumsApi, todosApi → src/entities/[entity]/api/

3. createEntityAdapter:

    - postSlice, userSlice → src/entities/[entity]/model/slice/

4. Инвалидация, кэширование, загрузка по userId и postId

## Homework - 6

Необходимо типизировать все сущности и компоненты, внедрить дженерики и правильно указать типы обработчиков событий. Настроить строгий режим TypeScript.

**Задание:**

1. Типы: Post, User, Comment, Album, Photo, Todo → src/entities/[entity]/model/types.ts
2. Дженерик ItemList<T> → src/shared/ui/ItemList/
3. Типизация props, обработчиков, PropsWithChildren, MouseEventHandler
4. tsconfig.base.json, tsconfig.app.json
