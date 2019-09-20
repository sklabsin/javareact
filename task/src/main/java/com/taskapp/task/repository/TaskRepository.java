package com.taskapp.task.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.taskapp.task.domain.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

	Task getById(Long id);
	
}
