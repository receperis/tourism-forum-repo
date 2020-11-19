package se.kth.sda.skeleton.post;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.comment.Comment;
import se.kth.sda.skeleton.comment.CommentService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<Post> getAll() {
        return postService.getAll();
    }


    @GetMapping("/{id}")
    public Post getById(@PathVariable Long id){
        return postService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Post create(@RequestBody Post newPost){

        //extracting information about the user from current session (not from front end)
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();
        User user = userService.findUserByEmail(userDetails.getUsername());
        newPost.setUser(user);
        return postService.create(newPost);
    }

    @PutMapping("")
    public Post update(@RequestBody Post updatedPost){
        return postService.update(updatedPost);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        postService.delete(id);


    }

}