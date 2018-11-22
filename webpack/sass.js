
module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'px-to-rem-loader',
							options: {
								// dpr: 12,
								// rem: 750,
								exclude: ['background-size']
							}
						},
                        'postcss-loader',
						'sass-loader'
					]
				}
			]
		}
	}
}