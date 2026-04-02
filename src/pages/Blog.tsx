export default function Blog() {
  return (
    <div className="container fade-in">
      <h1>Blog</h1>

      <div className="card">
        <h3>Why Microservices Over Monolith?</h3>
        <p>
          Microservices allow independent scaling and better fault isolation,
          but increase system complexity.
        </p>
      </div>

      <div className="card">
        <h3>Why Kafka for Event-Driven Systems?</h3>
        <p>
          Kafka enables asynchronous communication, making systems scalable and resilient.
        </p>
      </div>

      <div className="card">
        <h3>Why Redis for Caching?</h3>
        <p>
          Redis improves performance by reducing database load and speeding up access.
        </p>
      </div>
    </div>
  );
}