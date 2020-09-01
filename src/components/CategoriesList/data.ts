import planets from '../../assets/icons/planets.svg'
import asteroids from '../../assets/icons/asteroids.svg'
import stars from '../../assets/icons/stars.svg'
import galaxies from '../../assets/icons/galaxies.svg'
import colors from '../../styles/colors';


export default [{
  icon: planets,
  name: 'Planetas',
  colors: colors.gradients.blue
}, {
  icon: asteroids,
  name: 'Asteroids',
  colors: colors.gradients.pink
}, {
  icon: stars,
  name: 'Estrelas',
  colors: colors.gradients.cyan
}, {
  icon: galaxies,
  name: 'Galaxias',
  colors: colors.gradients.yellow
}];
