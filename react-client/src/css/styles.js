import { makeStyles } from "@material-ui/core/styles"

/* Home Layout */
const drawerWidth = 240
export const HomeStyles = makeStyles((theme) => ({
	root: {
		display: "flex"
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
	toolbartitle: {
		marginLeft: 80,
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: "none"
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		textAlign: "left",
		height: "100vh",
		paddingTop: "1rem",
		paddingLeft: "2rem",
		overflow: "auto"
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column"
	},
	fixedHeight: {
		height: 240
	}
}))

/* Home Workout Card */
export const CardStyles = makeStyles({
	root: {
		marginBottom: 20,
		minWidth: 275,
		marginRight: 32
	},
	title: {
		paddingBottom: 10
	},
	desc: {
		marginTop: 10,
		marginBottom: 25
	},
	pos: {
		marginTop: 10,
		marginBottom: 10,
		fontSize: 14
	}
})

/* Home Add Button */
export const HomeAddStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		},
		position: "absolute",
		bottom: 20,
		right: 20
	},
	extendedIcon: {
		marginRight: theme.spacing(1)
	}
}))
