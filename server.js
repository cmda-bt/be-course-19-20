const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const festivals = [{
	id: 'ncpcg35n3y',
	name: 'Pleinvrees on Tour',
	date: '2020-02-21'
},
{
	id: 'z1c4x3e21x',
	name: 'Sounda Indoor',
	date: '2020-02-22'
},
{
	id: 'cva669sznx',
	name: 'Hardcore Carnaval',
	date: '2020-02-23'
},
{
	id: 'nfu8us71ef',
	name: 'Het Stuiterbal',
	date: '2020-02-24'
},
]

const matches = {
	ncpcg35n3y: {
		'8f82ycymc6': {
			name: 'Vera',
			age: 24,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCGjkVIyzrjkd_3LUqve79wKF3cC52jjmeAjMriDv4gE5JE5Esg&s',
			location: { latitude: 52.3362429, longitude: 4.8694444 }
		},
		'yfru7ins36': {
			name: 'emma',
			age: 19,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC73EM9-6i7hfg9AcJk6XNIkc9SsUVMmHm_q4i7UNzJCo61nUN&s',
			location: { latitude: 52.4144806, longitude: 5.0219082 }
		},
		'1m3drh7pj7': {
			name: 'Lieke',
			age: 25,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXRqjIRRr6m703353LSwIb3bH0J9QIQGNBEgRr5lXR3PLuXO9cw&s',
			location: { latitude: 52.835097, longitude: 4.6943765 }
		},
		'hl6f5x78i2': {
			name: 'Eline',
			age: 18,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFt5uaslUwDaQ9J11yRomGYvwyX0Uj0LYkFPCdalCQ3BFT9Izq&s',
			location: { latitude: 52.3331508, longitude: 4.9551377 }
		},
		'udrnh1v7qh': {
			name: 'Mirthe',
			age: 23,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6zv5jVf3A9RmktXLIJyoq3UJu3TYaDj5ZP262mVVpa01iZLAYw&s',
			location: { latitude: 52.5126367, longitude: 5.0491819 }
		},
	},
	z1c4x3e21x: {
		'aoohy0ftqy': {
			name: 'Lisanne',
			age: 24,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBdPrSB14EpOUyZo_0KMxhXntxxx-i6OItcVdwDs7oFsHRxlPuA&s',
			location: { latitude: 51.6364799, longitude: 4.4731556 }
		},
		'gap0hway0j': {
			name: 'Fien',
			age: 22,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45yiRxgT_axi8Urriu8_MTUurQSxvfLphGAbEgul_FwVLg2CD&s',
			location: { latitude: 52.244167, longitude: 5.121111 }
		},
		'ny25on1noc': {
			name: 'Benthe',
			age: 20,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvNVDHySVwWD29lrSaHGPnSxkrYorS6rT-2DIuYoaKSCZy7NT&s',
			location: { latitude: 52.2292024, longitude: 5.1693338 }
		},
		'7bemhbw4vf': {
			name: 'Mara',
			age: 27,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL4iG8o4H_H0jY5NE2hwGjTfXOI8ZHISr1WIHUeV0kCASP5k9&s',
			location: { latitude: 52.4631783, longitude: 4.9513713 }
		},
		'avt32ejb62': {
			name: 'Merel',
			age: 18,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j8yAGBECUk0ulBCQShr9TrElQxPor1O3XSXNaQTU-dhf-0rmvg&s',
			location: { latitude: 52.5078271, longitude: 4.8483414 }
		},
	},
	cva669sznx: {
		'nypwe2yc69': {
			name: 'Mila',
			age: 24,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodbwuvIfCutzTpMrmeMK1E04H6l_weCyCNDsrPlLtQ1do5F2C&s',
			location: { latitude: 52.4694862, longitude: 5.0471278 }
		},
		'rpwxckcvf3': {
			name: 'Tess',
			age: 21,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-plcw1V5shq3i3rf6iG0dVHt_HKh_cbVQyESh4GzJ1uGdVyAsw&s',
			location: { latitude: 52.4324284, longitude: 4.9150708 }
		},
		'4nd69fbpop': {
			name: 'Lotte',
			age: 18,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL4iG8o4H_H0jY5NE2hwGjTfXOI8ZHISr1WIHUeV0kCASP5k9&s',
			location: { latitude: 52.4650634, longitude: 4.954089 }
		},
		'lbljfov123': {
			name: 'Sara',
			age: 26,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8-hpup-lBE_5xk95ML51kkDVq2IrJPceDsWA4RuLS0o4jBrEHg&s',
			location: { latitude: 52.2738533, longitude: 5.0285536 }
		},
		'iufpsnjwp9': {
			name: 'Julia',
			age: 24,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfmkHulPpQzYcviujq3GK2aDGPU385Y9UCAz-MOeX3R7WU2xyuA&s',
			location: { latitude: 52.2954563, longitude: 4.9023305 }
		},
	},
	nfu8us71ef: {
		'5jwqakn320': {
			name: 'Tess',
			age: 23,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-LRkct8lImlFGTKYzFRM6138B7s77r0An0yTquQlywKRjSsUAw&s',
			location: { latitude: 52.4941495, longitude: 4.9275193 }
		},
		'hjc4hvql74': {
			name: 'Laurie',
			age: 22,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdZMCVPkrfumUzgj_siTY36ZsUtsQB95Ahq17j_an8eTtVBMDpQ&s',
			location: { latitude: 52.2620371, longitude: 4.7127066 }
		},
		'oj23uqqhqb': {
			name: 'Anouk',
			age: 21,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGM6F_X4i5bb4G9hbxQNF33_PNdeombnwUMMIUhFkXScxVHLFy&s',
			location: { latitude: 51.847626, longitude: 4.327577 }
		},
		'9u1ocd74wf': {
			name: 'Kim',
			age: 21,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nuaNorSN7VwNTyUeVN7tRhau-0cE4EMYISCDwcxwUTL1MTVafQ&s',
			location: { latitude: 52.7413549, longitude: 5.0563358 }
		},
		'sw53uq1gjg': {
			name: 'Erin',
			age: 24,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3K3dx7G2f71vJfhDl5xBJob0S1PXmQ_vdYXJ_vfyv5SyvGii&s',
			location: { latitude: 52.0927337, longitude: 5.1493681 }
		},
	}
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, "./static")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("pages/index"));

app.post("/", async function (req, res) {

	// get user location from form input field
	const userLocation = JSON.parse(req.body.userLocation)

	// render new page with received data
	res.render("pages/matches", { location: userLocation, matches: matches });
})

app.use(function (req, res) {
	res.status(404).render("pages/404");
});

app.listen(3000);