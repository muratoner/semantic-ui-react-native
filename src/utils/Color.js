export default class {
	static rgbToYIQ({ r, g, b }) {
		return (r * 299 + g * 587 + b * 114) / 1000;
	}

	static hexToRgb(hex) {
		if (!hex || hex === undefined || hex === '') {
			return undefined;
		}

		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		return result
			? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			  }
			: undefined;
	}

	static contrast(colorHex, threshold = 128) {
		if (colorHex === undefined) {
			return '#000';
		}

		const rgb = this.hexToRgb(colorHex);

		if (rgb === undefined) {
			return '#000';
		}

		return this.rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
	}

	static stringToColour(str) {
		var hash = 0;
		for (var i = 0; i < str?.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		var colour = '#';
		for (var i = 0; i < 3; i++) {
			var value = (hash >> (i * 8)) & 0xff;
			colour += ('00' + value.toString(16)).substr(-2);
		}
		return colour;
	}
}
