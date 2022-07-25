// Intersection types (Combiningthis types)

type Draggable = {
   drag: () => void;

}

type Resiazble = {
   resize: () => void;

}

// Combine them using an intersection type
type UIWidget = Draggable & Resiazble;

// let textBox: UIWidget = {
//    drag () => {}
// }


