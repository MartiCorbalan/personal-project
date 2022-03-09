import Layout from "../layout/Layout";

export default function Login() {
  return (
    <div class="app">
      <div class="bg"></div>

      <form>
        <header>
          <img src="https://assets.codepen.io/3931482/internal/avatars/users/default.png?format=auto&height=80&version=1592223909&width=80" />
        </header>
        <div class="inputs">
          <input type="text" name="" placeholder="username or email" />
          <input type="password" name="" placeholder="password" />

          <p class="light">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>

      <footer>
        <button>
          <a href="Layout.jsx" onClick={<Layout />}>
            Continue
          </a>
        </button>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </footer>
    </div>
  );
}
