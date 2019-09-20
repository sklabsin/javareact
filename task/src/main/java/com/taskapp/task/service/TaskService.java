package com.taskapp.task.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskapp.task.domain.Task;
import com.taskapp.task.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task saveOrUpdateProjectTask(Task task){

        if(task.getStatus()==null || task.getStatus()==""){
        	task.setStatus("TO_DO");
        }

        return taskRepository.save(task);
    }
    
    public Iterable<Task> getAll(){
    	return taskRepository.findAll();
    }
    
    public Task findById(Long id) {
    	return taskRepository.getById(id);
    }
    
    public void delete(Long id) {
    	taskRepository.deleteById(id);
    }
}
