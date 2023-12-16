import React, { useState } from 'react';
import styles from '../Styles/Acceptinput.module.css';

function Acceptinput(props) {

  let [color, setcolor] = useState("");
  let [count, setcount] = useState(0);
  //const [state, setState] = useState(localStorage.getItem('data'));

  const create = () => {


    let g = document.getElementById('groupname').value;
    let b = true;
    const w = g.split(" ");

    if (g == "") {
      alert('You need to enter a group name to proceed');
      b = false;
    }
    else {
      if (w.length == 1) {
        alert('Your Group Name should have atleast 2 words!');
        b = false;
      }
    }


    if (color == "") {
      alert('You need to choose a color to proceed');
      b = false;
    }

    if (b == true) {

      let initials;
      for (let index = 0; index < g.length - 1; index++) {
        let element = g.substring(index, index + 1);
        if (element == ' ') {
          initials = g.substring(index + 1, index + 2);
          if (initials.isLetter)
            break;
        }
      }

      initials = g.substring(0, 1) + initials;
      console.log(initials);


      let notes = [];
      let notesapp = JSON.stringify(notes);
      /*localStorage.setItem(count , notesapp);
      g = count + color + initials + g;*/
      //setcount(String(Number(count)+1));
      let a = localStorage.getItem('index');
      let b = JSON.parse(a);
      b = b.map((element) => element + 1);
      g = b[0] + color + initials.toUpperCase() + g;
      localStorage.setItem(b[0], notesapp);
      localStorage.setItem('index', JSON.stringify(b));

      console.log(g);
      setcolor("");

      const interests = localStorage.getItem("Gn");
      console.log(interests);
      const data = JSON.parse(interests);
      console.log(data);
      data.push(g);
      let demo = JSON.stringify(data);
      localStorage.setItem("Gn", demo);




      /*let notes = [];
      let notesapp = JSON.stringify(notes);
      /*localStorage.setItem(count , notesapp);
      g = count + color + initials + g;*/
      //setcount(String(Number(count)+1));
      /*let a = localStorage.getItem('index');
      let b = JSON.parse(a);
      b = b.map((element) => element + 1);
      g = b[0] + color + initials + g;
      localStorage.setItem(b[0] , notesapp);
      localStorage.setItem('index' ,JSON.stringify(b));

      console.log(g);
      setcolor("");
      
      const interests = localStorage.getItem('Gn');
      console.log(interests);
      const data = JSON.parse(interests);
      console.log(data);
      data.push(g);
      let demo = JSON.stringify(data);
      localStorage.setItem("Gn", demo);*/


      props.settrigger(false);

    }

  }

  return (props.trigger) ? (
    <div className={styles.popupcontainer}>
    <div className={styles.popup}>

      <div className={styles.title}>Create New group</div><br />
      <div className={styles.gn}>Group Name</div><br />
      <div className={styles.cc}>Choose colour</div><br />
      <input type='text' className={styles.text} placeholder='Enter group name' id='groupname' />
      <div className={styles.violet} onClick={() => { setcolor('#B38BFA') }} />
      <div className={styles.violet} style={{ position: 'absolute', left: '26vw', background: '#FF79F2' }}
        onClick={() => { setcolor('#FF79F2') }} />
      <div className={styles.violet} style={{ position: 'absolute', left: '30vw', background: '#43E6FC' }}
        onClick={() => { setcolor('#43E6FC') }} />
      <div className={styles.violet} style={{ position: 'absolute', left: '34vw', background: '#F19576' }}
        onClick={() => { setcolor('#F19576') }} />
      <div className={styles.violet} style={{ position: 'absolute', left: '38vw', background: '#0047FF' }}
        onClick={() => { setcolor('#0047FF') }} />
      <div className={styles.violet} style={{ position: 'absolute', left: '42vw', background: '#6691FF' }}
        onClick={() => { setcolor('#6691FF') }} />
      <div className={styles.crtbtn} onClick={() => create()}><p style={{ marginTop: '2px' , cursor:'pointer' }}>
        Create</p></div>
    </div>
    </div>
  ) : "";
}

export default Acceptinput;