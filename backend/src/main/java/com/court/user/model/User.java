/**
 * 
 */
package com.court.user.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author KARTIK
 *
 */

@Entity
@Getter @Setter
@NoArgsConstructor
public class User {
	
	@Id
    private Long userId;
	private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String password;

}
