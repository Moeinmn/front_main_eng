import useAIChatStore from "@/src/shared/store/AIChatStore";

const useAIChat = () => {
    const { messages, setMessages, isLoading, setIsLoading,resetChat } = useAIChatStore();

    const addMessages = (newMessage: any) => {
        setMessages(newMessage);
    };

 
    const sendMessageToServer = async (message: string) => {
        setIsLoading(true);

        try {
            const response = await fetch("http://161.97.98.162:8000/hamyarchat/invoke", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify({
                    input: {
                        conversation_id: "666",  // Fixed conversation ID
                        init_question: message,  // The message from the user
                        collection_name: "plotset1"  // Fixed collection name
                    },
                    config: {},  // Empty config object
                    kwargs: {}  // Empty kwargs object
                }),
            });

        if (response.ok) {
            const data = await response.json(); // Parse the JSON response
            const aiResponse = data.output; // Extract the output message

            addMessages({
                sender: "AI",
                type: "text",
                error: false,
                content: aiResponse, // Use the AI's response
                id: `message-id-${messages.length}`,
                time: Date.now(), 
            });
        } else {
            // Handle any errors returned by the server
            addMessages({
                sender: "AI",
                type: "text",
                error: true,
                content: "در حال حاضر با مشکلات فنی روبرو هستم. 😕 لطفا بعدا دوباره امتحان کنید یا یک چت زنده با تیم ما شروع کنید. 🛠️",
                id: `message-id-${messages.length}`,
                time: Date.now(), 
            });
        }
        
            
        } catch (error) {
            console.error("Error fetching AI response:", error);
            addMessages({
                sender: "AI",
                type: "text",
                error: true,
                content: "در حال حاضر با مشکلات فنی روبرو هستم. 😕 لطفا بعدا دوباره امتحان کنید یا یک چت زنده با تیم ما شروع کنید. 🛠️",
                id: `message-id-${messages.length}`,
                time: Date.now(), 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        addMessages,
        isLoading,
        setIsLoading,
        sendMessageToServer,
        resetChat 
    };
};

export default useAIChat;
