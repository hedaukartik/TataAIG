/**
 * 
 */
package com.court.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.court.user.model.User;

/**
 * @author KARTIK
 *
 */
@Repository
public interface UserDAO extends JpaRepository<User, Long> {

	    User findByEmail(String email);
}
