import { StyleSheet } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = ({ setCategorySelected }) => {
  return (
    <>
      <Header title="Categories" />
      <Categories setCategorySelected={setCategorySelected} />
    </>
  );
};

const styles = StyleSheet.create({
  // Agrega aquí los estilos específicos para el componente Home si es necesario
});

export default Home;
