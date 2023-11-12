import CategoryElement from './categoryElement';

const placeholderArray: string[] = ["item1", "item2", "item3", "item4"];

// This element will manage its own state for which category element is open
// Each element will receive an optional styles.open value to define its height

// {sec1, sec2, sec3, sec4, sec5} : examplevar - to be added to this once we decide data struct
const CategoryContainer = () => {
    return(
        <div className="">
            { placeholderArray.map(item => <CategoryElement key={item} />)}
        </div>
    );
};

export default CategoryContainer;