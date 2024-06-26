function ResourceHightlight({ resources }) {
  return (

    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <figure className="image is-16by9">
                <img src="https://bulmatemplates.github.io/bulma-templates/images/first-post.png" alt="" />
              </figure>
            </div>
          </div>
          {
            resources.map((item, index) => {
              return (
                <section key={index} className="section">
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <div className="content is-medium">
                        <h2 className="subtitle is-4">{item.title}</h2>
                        <h1 className="title">Getting Started</h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </section>

              )
            })
          }




        </div>
      </div>
    </section>
  );
}

export default ResourceHightlight;