## Redux Toolkit

### 1. Conceptos Básicos de Redux Toolkit

Redux Toolkit es la herramienta recomendada para gestionar el estado en aplicaciones React. Simplifica la configuración y estructura de Redux, incluyendo utilidades para crear slices de estado, realizar peticiones asincrónicas y organizar el store de Redux de forma más eficiente.

### 2. Procedimientos de Implementación

#### 2.1 Instalación de Dependencias

Para comenzar, instala las dependencias necesarias:

```bash
npm install @reduxjs/toolkit react-redux axios
```

#### 2.2 Configuración del Store

Configura el `store` utilizando `configureStore`:

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
```

#### 2.3 Integración en el Componente Principal

En el archivo principal (`main`), integra el `store` en tu aplicación utilizando el `Provider` de `react-redux`:

```javascript
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 3. Creación de un Slice (Ejemplo: `usersSlice`)

Un slice contiene el estado y los reducers relacionados con una entidad específica. Aquí, `usersSlice` administra la lista de usuarios.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    getUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUser } = usersSlice.actions;
export default usersSlice.reducer;
```

#### 3.1 Agregar el Reducer al Store

Incluye el `usersSlice` en el `store`:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
```

### 4. Componente `Users`

Crea un componente `Users` para obtener y mostrar una lista de usuarios mediante una solicitud `axios`.

```javascript
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/usersSlice";
import User from "./User";

function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((res) => dispatch(getUser(res.data)))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <User key={user._id} {...user} />
      ))}
    </div>
  );
}

export default Users;
```

### 5. Implementación de `postsSlice` y Componente `Posts`

Crea `postsSlice` para gestionar los posts, y `Posts` para mostrarlos.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: (state, action) => {
      return action.payload;
    },
    createPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getPosts, createPost } = postsSlice.actions;
export default postsSlice.reducer;
```

```javascript
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postsSlice";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/posts")
      .then((res) => dispatch(getPosts(res.data)))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
```

### 6. Conclusión

Esta estructura permite manejar usuarios y posts de manera modular, mejorando la escalabilidad y legibilidad de la aplicación.

##### Made by Prof. Martin with a lot of 💖 and ☕.
