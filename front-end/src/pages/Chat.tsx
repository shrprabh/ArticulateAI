import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import { ChatItem } from "../components/chat/ChatItem";
import { IoMdSend} from 'react-icons/io';
const chat_messages = [
  { role: "user", content: "Hello, AI!" },
  { role: "assistant", content: "Hi there! How can I help you today?" },
  { role: "user", content: "I have a question about programming." },
  {
    role: "assistant",
    content: "Sure, I'd be happy to help. What do you need assistance with?",
  },
  { role: "user", content: "Can you explain loops in Python?" },
  {
    role: "assistant",
    content:
      "Certainly! In Python, a loop is a control flow statement that allows you to repeatedly execute a block of code. There are two main types of loops: 'for' loops and 'while' loops.",
  },
  { role: "user", content: "Great! Tell me more about 'for' loops." },
  {
    role: "assistant",
    content:
      "A 'for' loop is used to iterate over a sequence (that is either a list, tuple, dictionary, string, or range). It executes a block of code for each item in the sequence.",
  },
  { role: "user", content: "Thanks for the explanation!" },
  {
    role: "assistant",
    content:
      "You're welcome! If you have any more questions, feel free to ask.",
  },
];

export const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
            mt: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split("")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", m: 4, p: 3 }}>
            {" "}
            You can ask information related to knowledge, Business, Advices,
            Food, Technology, etc. But avoid sharing personal information
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              mx: "auto",
              color: "white",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red[500],
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: 600,
          }}
        >
          Model -GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            scrollbarColor: "#52616b transparent", // Set the scrollbar color
            "&::-webkit-scrollbar": {
              width: "12px", // Adjust the scrollbar width for WebKit browsers
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#52616b", // Adjust the thumb color for WebKit browsers
            },
          }}
        >
          {chat_messages.map((chat, index) => (
            <ChatItem
              content={chat.content}
              role={chat.role as "user" | "assistant"}
              key={index}
            ></ChatItem>
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display:"flex",
            margin:"auto"
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          ></input>
          <IconButton sx={{ml:"auto",color:"white",}}><IoMdSend></IoMdSend></IconButton>
        </div>
      </Box>
    </Box>
  );
};
