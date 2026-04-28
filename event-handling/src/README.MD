# Props- 
-Its how components talk to each other
-like argument to a function
-make component dynamic and truly reusable
-can pass a javascript value, including fnc, arrays, objects and JSX

# Rendering lists-
use- 1).map method
2).fliter method

# Keys-
WHEN YOU RENDER LIST , YOU NEED TO ADD A KEY PROP TO EACH ELEMENT WITH UNIQUE VALUE WITHIN THE LIST

1) To track the elements in the list
2) crucial for  react to efficiently update the UI
3) key prop goes on the outermost repeated element
4) key is a special prop that react uses internally. its not a prop that you pass to a child component and destructure there to get access to it