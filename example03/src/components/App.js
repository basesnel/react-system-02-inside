const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

function App() {
  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form {status}</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
}
