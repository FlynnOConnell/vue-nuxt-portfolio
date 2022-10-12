<template>
     <main>
      <section class="home-intro">
        <h1>Intersection Observer is pretty useful</h1>
      </section>

      <div class="home-about">
        <h2>About us</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div class="columns">
          <div class="col fade-in">
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              maiores fuga eos provident voluptas perferendis.
            </p>
          </div>
          <div class="col fade-in">
            <h3>A, illo!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus minima quo beatae eius blanditiis officiis.
            </p>
          </div>
          <div class="col fade-in">
            <h3>Repudiandae, error?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              quasi quis doloribus quia illum laudantium.
            </p>
          </div>
        </div>
      </div>

      <div class="home-more-stuff">
        <div class="more-stuff-grid">
          <img
            src="https://unsplash.it/400"
            alt=""
            class="slide-in from-left"
          />
          <p class="slide-in from-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </div>
        <div class="more-stuff-grid">
          <p class="slide-in from-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            src="https://unsplash.it/401"
            alt=""
            class="slide-in from-right"
          />
        </div>
        <div class="more-stuff-grid">
          <img src="//unsplash.it/400" alt="" class="slide-in from-left" />
          <p class="slide-in from-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </div>
        <div class="more-stuff-grid">
          <p class="slide-in from-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            src="https://unsplash.it/401"
            alt=""
            class="slide-in from-right"
          />
        </div>
        <div class="more-stuff-grid">
          <img src="//unsplash.it/400" alt="" class="slide-in from-left" />
          <p class="slide-in from-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </div>
        <div class="more-stuff-grid">
          <p class="slide-in from-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            src="https://unsplash.it/401"
            alt=""
            class="slide-in from-right"
          />
        </div>
      </div>
    </main>
</template>

<script>
export default {
	head() {
		return {
			title: "Flynns Website",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "My site",
				},
			],
            script: [
                {
                    src: js/observer.js,
                    body: true
                },
                
            ]
		};
	},
};
</script>

