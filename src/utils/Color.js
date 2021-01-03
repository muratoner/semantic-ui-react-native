export default class {
	static rgbToYIQ({ r, g, b }) {
		return (r * 299 + g * 587 + b * 114) / 1000;
	}

	static hexToRgb(hex) {
		if (!hex) {
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
		if (!colorHex) {
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

	static lightenColor(hex, amt) {
		// From https://css-tricks.com/snippets/javascript/lighten-darken-color/
		var usePound = false;
		if (hex[0] === '#') {
			hex = hex.slice(1);
			usePound = true;
		}
		var num = parseInt(hex, 16);
		var r = (num >> 16) + amt;
		if (r > 255) r = 255;
		else if (r < 0) r = 0;
		var b = ((num >> 8) & 0x00ff) + amt;
		if (b > 255) b = 255;
		else if (b < 0) b = 0;
		var g = (num & 0x0000ff) + amt;
		if (g > 255) g = 255;
		else if (g < 0) g = 0;
		return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
	}
}
