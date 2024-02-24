function Home() {
  return (
    <>
      <h1>Welcome to the landing</h1>

      <form>
        <label htmlFor="name">
          Name:
          <input id="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" />
        </label>
        <label htmlFor="phone">
          Phone:
          <input id="phone" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Home;
