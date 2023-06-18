import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HorizonLine from "../../assets/json/horizonline"
import { ImPencil } from 'react-icons/im';

interface PostProps {
  ChallengePostList: ChallengePost[];
}

interface ChallengePost {
  id: number;
  author: string;
  date: string;
  content: string;
}

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostItem = styled.div`
  width: 90%;  
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
`;

const PostHeader = styled.div`
  display: flex;
  margin: 10px;
`;

const PostAuthor = styled.div`
  font-weight: bold;
  font-size: 1em;
  color: ${(props) => props.theme.mainGreen};
`;

const PostDate = styled.div`
  margin-left: 10px;
  color: #868e96;
  font-size: 1em;
`;

const PostContent = styled.div`
  font-size: 1em;
  margin: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 50px;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 95%;
  height: 50px;
  padding: 10px 40px 10px 10px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  }
`;

const InputIcon = styled(ImPencil)`
  position: absolute;
  top: 90%;
  right: 2%;
  transform: translateY(-50%);
  border: 1px solid #ccc;
  border-radius: 20%;
  padding: 5px;
  background-color: ${(props) => props.theme.mainGreen};
  border: 1px solid ${(props) => props.theme.mainGreen};
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
`;


const PostList: React.FC<PostProps> = ({ ChallengePostList }) => {
  const [posts, setPosts] = useState<ChallengePost[]>([]);
  const [newPost, setNewPost] = useState<ChallengePost>({id: 0, author: '', date: '', content: ''});

  useEffect(() => {
    setPosts(ChallengePostList);
  }, [ChallengePostList]);

  const addPost = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    setPosts([...posts, {...newPost, date: formattedDate}]);
    setNewPost({id: 0, author: '', date: '', content: ''});
  };

  return (
    <PostWrapper>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <PostHeader>
            <PostAuthor>{post.author}</PostAuthor>
            <PostDate>{post.date}</PostDate>
          </PostHeader>
          <HorizonLine borderBottom="2px solid #EEEEEE"/>
          <PostContent>{post.content}</PostContent>
        </PostItem>
      ))}
      <InputWrapper>
        <InputField 
          type="text" 
          placeholder="독서 후기를 등록하여 다른 사람들과 함께 공유해보세요!" 
          value={newPost.content} 
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <InputIcon onClick={addPost}/>
      </InputWrapper>
    </PostWrapper>
  );
}

export default PostList;