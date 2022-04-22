import React from 'react'
import Navbar from '../Navbar/Navbar'


function MyPage () {

    return (

        <div>
            <Navbar />
            <div className="details">
	     <h3>Leonardo DiCaprio</h3>
	    <p>Actor / Environmentalist</p>
	</div>
	<div className="container bio">
			<div className="title">
				<h6>Biography</h6>
			</div>
			<div className="content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis fugit hic vel voluptates perferendis aut quibusdam sit omnis unde aspernatur quae repellat blanditiis autem, a libero asperiores neque illum aliquid est tempore. Eveniet velit voluptate amet facere, repellendus aperiam, cumque est ipsam. Asperiores expedita iusto, inventore sit suscipit nihil repudiandae? Laboriosam cum maxime dolorem neque, in veniam expedita ad. Hic fugit necessitatibus blanditiis, optio dignissimos molestiae nam, numquam odio.</p>
			</div>
			<hr />
	</div>
	<div className="container pics">
		<div className="title">
			<h6>Pictures</h6>
		</div>
		<div className="row row-1">
			<div className="col m6 s12">
				<div className="card">
            		<div className="card-image" id="first-img">
              			<span className="card-title">Inception</span>
            		</div>
          		</div>
			</div>
			<div className="col m6 s12">
				<div className="card">
            		<div className="card-image" id="second-img">
              			<span className="card-title">Django Unchained</span>
            		</div>
          		</div>
			</div>
		</div>
		<div className="row">
			<div className="col m6 s12">
				<div className="card">
            		<div className="card-image" id="third-img">
              			<span className="card-title">The Wolf of Wallstreet</span>
            		</div>
          		</div>
			</div>
			<div className="col m6 s12">
				<div className="card">
            		<div className="card-image" id="forth-img">
              			<span className="card-title">The Great Gatsby</span>
            		</div>
          		</div>
			</div>
		</div>
	</div>
	<div className="container posts">
		<div className="title">
			<h6>Posts</h6>
		</div>
		<div className="row">
        	<div className="col s12 m6">
          		<div className="card blue-grey">
            		<div className="card-content white-text">
              			<span className="card-title">Post title</span>
              			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nobis nesciunt nulla laudantium aspernatur, delectus sed, minus ex perspiciatis...</p>
            		</div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}


export default MyPage