import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
  horizontal: true
})`
  padding: 8px 0 24px;
`;

export const CategoryWrapper = styled.TouchableOpacity``;

export const CategoryContainer = styled(LinearGradient)
  .attrs((props) => ({
    colors: [...props.colors]
  }))`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 18px;

  align-items: center;
  justify-content: center;
`;

 export const CategoryIconContainer = styled.View`
 
 `;

 export const CategoryName = styled.Text`
    color: ${colors.brand.white}
 `;
