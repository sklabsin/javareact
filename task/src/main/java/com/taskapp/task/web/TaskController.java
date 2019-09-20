package com.taskapp.task.web;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskapp.task.domain.Task;
import com.taskapp.task.service.TaskService;

@RestController
@RequestMapping("/api/board")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@Valid @RequestBody Task task, BindingResult result){

        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();



            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Task newPT = taskService.saveOrUpdateProjectTask(task);

        return new ResponseEntity<Task>(newPT, HttpStatus.CREATED);
    }
    
    @GetMapping("/all")
    public Iterable<Task> getAllToBord(){
    	
    	return taskService.getAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable Long id){
    	
    	Task getTask = taskService.findById(id);
		return new ResponseEntity<Task>(getTask, HttpStatus.OK);
    	
    	
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id){
    	taskService.delete(id);
    	
		return new ResponseEntity<String>("Task Deleted", HttpStatus.OK);
    	
    	
    }
    

}