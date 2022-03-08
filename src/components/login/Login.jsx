export default function Login() {
  return (
    <>
      <div className="formulari">
        <form>
          <div className="form-group">
            <label htmlFor="">Email address</label>&nbsp;
            <input type="text" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>&nbsp;
            <input type="text" placeholder="Enter password" />
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
