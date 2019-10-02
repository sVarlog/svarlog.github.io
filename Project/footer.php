<footer class="footer" id="footer">
		<div class="container">
			<div class="name">
				<a href="<?php bloginfo('url') ?>">
					<div><?php bloginfo('name'); ?></div>
				</a>
			</div>
			<?php wp_nav_menu(array(
				'theme_location' => 'bottom',
				'container' => 'ul',
				'menu_class' => 'menuRow',
				'menu_id' => null
			)); ?>
		</div>
	</footer>

	<?php wp_footer(); ?>
</body>
</html>