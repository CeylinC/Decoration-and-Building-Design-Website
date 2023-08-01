import './ProjectPage.css';
import Header from "../../components/header/Header"
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { useState, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Comment from '../../components/comment/Comment';

function ProjectPage() {
    const [model, setModel] = useState(false);
    let data = [
        {
            id: 1,
            poster: 'https://i.ytimg.com/vi/3XnVihF51zs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxmdxnz26xsOLOzhSCwwwIqLOT0Q',
            videoUri: './asset/video/video1.mp4',
            comments: [
                {
                    name: "Ceylin",
                    comment: "Harika",
                    date: "27.10.2022"
                },
                {
                    name: "Azim",
                    comment: "BAYILDIM!",
                    date: "25.10.2022"
                },
                {
                    name: "Ramazan",
                    comment: "İnanılmaz",
                    date: "26.11.2022"
                }
            ]
        },
        {
            id: 2,
            poster: 'https://i.ytimg.com/vi/liQPUOVB9Zo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPLyL6zRvDCjaorqF5hJi8lWOzxw',
            videoUri: './asset/video/video2.mp4',
            comments: [
                {
                    name: "Veli",
                    comment: "Harika",
                    date: "27.10.2022"
                },
                {
                    name: "Şöhret",
                    comment: "BAYILDIM!",
                    date: "25.10.2022"
                },
                {
                    name: "Dilara",
                    comment: "İnanılmaz",
                    date: "26.11.2022"
                }
            ]
        },
        {
            id: 3,
            poster: 'https://i.ytimg.com/vi/mu-wDibD2b0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDan0kJNFXCGGoXhTuZV6ZwiEqhvw',
            videoUri: './asset/video/video3.mp4',
            comments: [
                {
                    name: "Ali",
                    comment: "Harika",
                    date: "27.10.2022"
                },
                {
                    name: "Ayşe",
                    comment: "BAYILDIM!",
                    date: "25.10.2022"
                },
                {
                    name: "Mehmet",
                    comment: "İnanılmaz",
                    date: "26.11.2022"
                }
            ]
        },
    ]

  return (
    <div className="project-page">
        <Header text="Projelerimiz" />
        <div className="video-gallery">
            {
                data.map((item, index) => {
                    let divRef = createRef(null);
                    const openModel = () => {
                        divRef.current.classList.remove('video');
                        divRef.current.classList.add("model");
                        document.querySelectorAll(".video").forEach((video) => {
                            video.style.display = "none";
                        });
                        setModel(true);
                    }
                    const closeModel = () => {
                        divRef.current.classList.remove('model');
                        divRef.current.classList.add('video');
                        document.querySelectorAll(".video").forEach((video) => {
                            video.style.display = "block";
                        });
                        setModel(false);
                    }
                    return(
                        <div ref={divRef} className="video" key={index}>
                            {model && <button onClick={() => closeModel()} className='model-close-btn'><FontAwesomeIcon icon={faArrowLeft} /> Projelerimize Geri Dön</button>}
                            <div className="video-container" onClick={() => openModel()}>
                                <Video
                                    style = {{width: '100%'}}
                                    autoPlay = {model}
                                    controls = {['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                    poster = {item.poster}
                                >
                                    <source src={item.videoUri} type='video/webm'></source>
                                </Video>
                            </div>
                            {
                                model && 
                                <div className='comments'>
                                    <Header text="Yorumlar" />
                                    {
                                        item.comments.map((comment, index) => {
                                            return(<Comment key={index} data={{name: comment.name, comment: comment.comment, date: comment.date}}/>);
                                        })
                                    }
                                </div>
                            }
                        </div>
                    );
                })
            }
        </div>
    </div>
  );
}

export default ProjectPage;
