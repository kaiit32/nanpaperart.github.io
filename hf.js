class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML='	
		<footer>
			<div class="footer py-4">
				<div class="container-fluid text-center">
					  <p style="font-size: 50%;">
					  NanPaper Art Copyright ©2022
					  </p>
				</div>
			</div>
		</footer>
		'
		
	}
}

customElements.define("my-footer" MyFooter)